import { View, Text } from "react-native";
import QRCode from "react-native-qrcode-svg";
import styles from "./qrcodebox.style";

const QRCodeBox = ({ value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Show this code to get a stamp</Text>
      <QRCode value={value} size={150} />
    </View>
  );
};

export default QRCodeBox;
