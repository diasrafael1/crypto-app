import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderTopColor: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    marginTop: 10,
    paddingTop: 30,
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  button: {
    width: "60%",
    height: 40,
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",
    borderRadius: 40,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  oldPrice: {
    color: "orange",
    fontWeight: "bold",
  },
});
export default styles;
