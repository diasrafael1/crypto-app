import { Text, View } from "react-native";
import styles from "./styles";

export default function CurrentPrice() {
  return (
    <View style={styles.headerPrice}>
      <Text style={styles.currentPrice}>R$ 54423.22</Text>
      <Text style={styles.textPrice}>Ultima cotação</Text>
    </View>
  );
}
