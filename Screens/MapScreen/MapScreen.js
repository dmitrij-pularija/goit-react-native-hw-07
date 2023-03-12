import React from "react";
import MapView, { Marker } from "react-native-maps";
import { View } from "react-native";
import styles from "./MapScreen.styles.js";
import data from "../../assets/data";

const Map = ({
  navigation,
  route: {
    params: { latitude, longitude },
  },
}) => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType="standard"
        minZoomLevel={15}
      >
        {data.map(({ id, name, address, coordinate }) => (
          <Marker
            key={id}
            title={address}
            coordinate={coordinate}
            description={name}
          />
        ))}
      </MapView>
    </View>
  );
};

export default Map;