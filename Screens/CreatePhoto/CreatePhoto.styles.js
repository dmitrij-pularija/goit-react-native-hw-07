import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // display: "flex",
    justifyContent: "center",
    // alignItems: "center",
    // width: "100%",
    // height: "100%",
  },
  permission: {
    alignSelf: "center",
    gap: 20,
  },

  camera: {
    flex: 1,
    width: "100%",
    height: "100%",
    // alignItems: "center",
  },
  photoView: {
    flex: 1,
    resizeMode: "contain",
    backgroundColor: "transparent",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsBox: {
    // position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300,
    height: 70,
    // paddingHorizontal: 50,
    marginBottom: 80,
    alignItems: "center",
  },

  libContainer: {
    justifyContent: "center",
    alignItems: "center",
  },


  takeContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  flipContainer: {
    // position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    // left: 50,
    // top: 12,
  },
});
export default styles;