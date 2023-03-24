import React from "react";
import { useSelector } from "react-redux";
import MapView, { Marker } from "react-native-maps";
import { selectPosts } from "../../redux/data/selectors";
import { View, StatusBar } from "react-native";
import styles from "./Map.styles.js";

const Map = ({
  navigation,
  route: {
    params: { latitude, longitude },
  },
}) => {
  const posts = useSelector(selectPosts);

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
        mapType={"standard"}
        minZoomLevel={15}
        zoomControlEnabled={true}
        // showsUserLocation={true}
        // toolbarEnabled={true}
        loadingEnabled={true}
      >
        {posts.map(({ postId, name, adress, coordinate, uri}) => (
          <Marker
            key={postId}
            title={adress}
            coordinate={coordinate}
            description={name}
            // image={uri}
          />
        ))}
      </MapView>
      <StatusBar hidden={true} /> 
    </View>
  );
};

export default Map;