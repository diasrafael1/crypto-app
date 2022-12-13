import { Text, View } from "react-native";
import { formatPrice } from "../../utils/formatPrice";
import styles from "./styles";

interface Props {
  text: string;
  price: number;
}

export default function Price({ text, price }: Props) {
  const newPrice = formatPrice(price);

  return (
    <View style={styles.headerPrice}>
      <Text style={styles.currentPrice}>R$ {newPrice}</Text>
      <Text style={styles.textPrice}>{text}</Text>
    </View>
  );
}
