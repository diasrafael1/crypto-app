import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect } from "react";
import { Image, SafeAreaView, StatusBar } from "react-native";
import Price from "../../components/Price";
import { StackParams } from "../../types/StackParams";
import styles from "./styles";

export default function CryptoInfo() {
  const router = useRoute<RouteProp<StackParams, "CryptoInfo">>();
  const navigation = useNavigation<StackNavigationProp<StackParams, "CryptoInfo">>();
  const coin = router.params;

  useEffect(() => {
    navigation.setOptions({
      title: coin.name,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="orange" barStyle="light-content" />
      <Image style={styles.coinImage} source={{ uri: coin.image }} />
      <Price text="Última cotação" price={coin.current_price} />
      <Price text="Preço mais alto nas 24h" price={coin.high_24h} />
      <Price text="Preço mais baixo nas 24h" price={coin.low_24h} />
    </SafeAreaView>
  );
}
