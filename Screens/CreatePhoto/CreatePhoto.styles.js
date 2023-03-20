import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  permission: {
    alignSelf: "center",
    gap: 20,
  },

  camera: {
    flex: 1,
  },
  photoView: {
    flex: 1,
    resizeMode: "contain",
    backgroundColor: "transparent",
    justifyContent: "flex-end",
  },
  buttonsBox: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    height: 48,
    marginBottom: 100,
    alignItems: "center",
  },

  takeContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  flipContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    left: 50,
    top: 12,
  },
});
export default styles;