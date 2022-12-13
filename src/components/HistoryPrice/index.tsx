import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { formatDate } from "../../utils/formatDate";
import Price from "../Price";
import DateTime from "./DateTime";
import styles from "./styles";

export default function HistoryPrice() {
  const [show, setShow] = useState(false);
  const [OldPrice, setOldPrice] = useState(0);
  const [date, setDate] = useState(new Date());

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verificar histórico de preço</Text>
      <TouchableOpacity style={styles.button} onPress={showDatepicker}>
        <Text style={styles.buttonText}>Selecione a data</Text>
      </TouchableOpacity>
      {OldPrice ? (
        <Price price={OldPrice} text={`Preço da data ${formatDate(date, "dd/MM/yyyy")}`} />
      ) : null}
      {show ? (
        <DateTime setShow={setShow} setOldPrice={setOldPrice} date={date} setDate={setDate} />
      ) : null}
    </View>
  );
}
