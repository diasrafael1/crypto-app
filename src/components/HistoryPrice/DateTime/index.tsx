import DateTimePicker from "@react-native-community/datetimepicker";
import { RouteProp, useRoute } from "@react-navigation/native";
import { StackParams } from "../../../types/StackParams";
import { formatDate } from "../../../utils/formatDate";

interface Props {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setOldPrice: React.Dispatch<React.SetStateAction<number>>;
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
}

export default function DateTime({ setShow, setOldPrice, date, setDate }: Props) {
  const router = useRoute<RouteProp<StackParams, "CryptoInfo">>();
  const coin = router.params;

  const onChange = async (event: any, selectedDate: any) => {
    const currentDate: Date = selectedDate;
    setShow(false);
    setDate(currentDate);

    if (+currentDate < +new Date()) {
      const newDate = formatDate(currentDate, "dd-MM-yyyy");
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coin.id}/history?date=${newDate}`
      );
      const data = await response.json();
      setOldPrice(data.market_data.current_price.brl);
    } else {
      setOldPrice(0);
    }
  };
  return (
    <DateTimePicker
      testID="dateTimePicker"
      value={date}
      mode="date"
      is24Hour={true}
      onChange={onChange}
    />
  );
}
