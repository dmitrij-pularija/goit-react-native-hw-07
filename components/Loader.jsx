import { ActivityIndicator, StyleSheet, View } from "react-native";

const Loader = () => {
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        {
          backgroundColor: "rgba(0,0,0,0.4)",
          alignItems: "center",
          justifyContent: "center",
        },
      ]}
    >
      <ActivityIndicator color="#0000ff" animating size="large" />
    </View>
  );
};

export default Loader;