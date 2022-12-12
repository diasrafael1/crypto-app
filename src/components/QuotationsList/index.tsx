import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

const buttons = [
  { text: "7D", function: () => {} },
  { text: "15D", function: () => {} },
  { text: "1M", function: () => {} },
  { text: "3M", function: () => {} },
  { text: "6M", function: () => {} },
];

export default function QuotationsList() {
  return (
    <>
      <View style={styles.filters}>
        {buttons.map((button) => (
          <TouchableOpacity
            key={button.text}
            style={styles.buttonQuery}
            onPress={button.function}
          >
            <Text style={styles.textButtonQuery}>{button.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView></ScrollView>
    </>
  );
}
