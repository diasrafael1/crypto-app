import { Text, View, Image } from "react-native";
import styles from "./styles";

export default function QuotationsItems() {
  return (
    <View style={styles.mainContent}>
      <View style={styles.contextLeft}>
        <View style={styles.boxLogo}>
          <Image
            style={styles.logBitcoin}
            source={require("../../../img/bitcoinred.png")}
          />
          <Text style={styles.dayContation}>07/05/2022</Text>
        </View>
      </View>
      <View style={styles.contextRight}>
        <Text style={styles.price}>R$ 53331.24</Text>
      </View>
    </View>
  );
}
