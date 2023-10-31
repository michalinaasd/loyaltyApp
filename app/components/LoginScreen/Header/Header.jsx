import React from "react";
import { Text, View } from "react-native";
import styles from "./header.style";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Loyalty</Text>
      <Text style={styles.paragraph}>Please fill in details</Text>
    </View>
  );
};
export default Header;
