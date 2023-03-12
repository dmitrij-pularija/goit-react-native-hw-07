import React from "react";
import { useLinkTo } from "@react-navigation/native";
import { View, Text } from "react-native";
import Container from "../../components/Container/Container";
import Avatar from "../../components/Avatar/Avatar";
import styles from "./ProfileScreen.styles.js";
import HeaderButton from "../../components/Button/Button";
import PostsCard from "../../components/PostsCard/PostsCard";
import data from "../../assets/data";

const ProfileScreen = ({ navigation }) => {
  const linkTo = useLinkTo();

  const mapView = (coordinate) => {
    navigation.navigate("Map", coordinate);
  };
  const commentView = (id, uri) => {
    navigation.navigate("Comments", { id, uri });
  };

  return (
    <Container>
      <Avatar />
      <View style={styles.logOut}>
        <HeaderButton name={"log-out"} onPress={() => linkTo("/Login")} />
      </View>
      <Text style={styles.profileTitle}>Natali Romanova</Text>
      <View style={styles.list}>
        {data.map(({ id, name, address, coordinate, uri }) => (
          <PostsCard
            key={id}
            id={id}
            name={name}
            address={address}
            coordinate={coordinate}
            uri={uri}
            mapClick={mapView}
            commentClick={commentView}
          />
        ))}
      </View>
    </Container>
  );
};

export default ProfileScreen;