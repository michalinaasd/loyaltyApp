import { FlatList } from "react-native";
import Stamp from "./Stamp";
import styles from "./stamps.style";

const StampList = ({ stamps }) => {
  return (
    <FlatList
      data={stamps}
      renderItem={({ item, index }) => <Stamp item={item} />}
      numColumns={5}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.list}
    />
  );
};

export default StampList;
