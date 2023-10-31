import { View, Text } from "react-native";
import styles from "./stamps.style";

const Stamp = ({ item }) => {
  return (
    <View style={styles.stampContainer}>
      {item.isChecked && <Text style={styles.checked}>X</Text>}
    </View>
  );
};

export default Stamp;
