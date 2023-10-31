import { Image, View } from "react-native";
import styles from "./header.style";

const Header = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={require("../../../../assets/7312.jpg")}
        style={styles.image}
      />
    </View>
  );
};

export default Header;
