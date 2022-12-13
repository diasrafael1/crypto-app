import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
  coinImage: {
    width: 100,
    height: 100,
  },
  formInput: {
    width: "70%",
    borderRadius: 10,
    backgroundColor: "#f6f6f6",
    height: 50,
    margin: 12,
    paddingLeft: 10,
  },
});
export default styles;
