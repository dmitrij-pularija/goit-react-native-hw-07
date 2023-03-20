import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    flex: 1,
    width: "100%",
    // height: "90%"
    // width: Dimensions.get("window").width,
    // height: Dimensions.get("window").height,
  },
});

export default styles;