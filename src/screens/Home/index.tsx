import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  StatusBar,
  View,
  FlatList,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackParams } from "../../types/StackParams";
import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import styles from "./styles";
import { Coin } from "../../types/Coin";

export default function Home() {
  const navigation = useNavigation<StackNavigationProp<StackParams, "Home">>();
  const [coins, setCoins] = useState<Coin[]>();

  useEffect(() => {
    async function getCoins() {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=20&page=1&sparkline=false"
      );
      const data = await response.json();
      setCoins(data);
    }
    getCoins();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="orange" barStyle="light-content" />
      <Text style={styles.title}>
        Selecione a <Text style={styles.titleCrypto}>criptomoeda</Text> para
        obter informações
      </Text>
      <View style={styles.coinsContainer}>
        <FlatList
          data={coins}
          keyExtractor={(coin) => {
            return coin.id;
          }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.coinContainer}
              onPress={() => navigation.navigate("CryptoInfo", item)}
            >
              <Image style={styles.coinImage} source={{ uri: item.image }} />
              <Text style={styles.coinName}>{item.name}</Text>
              <Text style={styles.coinSymbol}>{item.symbol}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
