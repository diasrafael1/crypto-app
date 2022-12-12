import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  titleCrypto: {
    color: "orange",
  },
  coinsContainer: {
    width: "100%",
    marginTop: 30,
  },
  coinContainer: {
    width: "100%",
    height: 80,
    borderTopColor: "#fff",
    borderBottomColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 5,
  },
  coinImage: {
    width: 50,
    height: 50,
  },
  coinName: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 20,
  },
  coinSymbol: {
    color: "grey",
    marginLeft: 5,
  },
});
export default styles;
