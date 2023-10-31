import React, { useMemo } from "react";
import { View } from "react-native";
import { collection, query, where, getDocs } from "firebase/firestore";
import { FIREBASE_AUTH, FIREBASE_DB } from "../../../FirebaseConfig";
import { QRCodeBox, StampList, CardHeader } from "../../components";
import styles from "./loyaltycard.style";

export default function LoyaltyCardScreen({ navigation }) {
  let [isLoading, setIsLoading] = React.useState(true);
  let [stamps, setStamps] = React.useState([]);

  const db = FIREBASE_DB;

  const auth = FIREBASE_AUTH;
  let loadToDoList = async () => {
    const q = query(
      collection(db, "stamps"),
      where("userId", "==", auth.currentUser.uid)
    );
    try {
      const querySnapshot = await getDocs(q);
      let stamps = [];
      querySnapshot.forEach((doc) => {
        let stamp = doc.data();
        stamp.id = doc.id;
        stamps.push(stamp);
      });
      setStamps(stamps);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const stampsArr = useMemo(() => {
    return Array.from({ length: 10 }, (_, index) => ({
      isChecked: index < stamps.length,
    }));
  }, [stamps]);

  if (isLoading) {
    loadToDoList();
  }

  return (
    <View style={styles.container}>
      <CardHeader />
      <StampList stamps={stampsArr} />
      <QRCodeBox value={auth.currentUser.uid} />
    </View>
  );
}
