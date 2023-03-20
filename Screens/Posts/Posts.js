import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts, addLike } from "../../redux/data/operations";
import styles from "./Posts.styles";
import { View, ScrollView, SafeAreaView } from "react-native";
import PostsCard from "../../components/PostsCard/PostsCard";
import UserCard from "../../components/UserCard/UserCard";
import { selectPosts } from "../../redux/data/selectors";
import { selectUser } from "../../redux/auth/selectors";

const Posts = ({ navigation }) => {
  const dispatch = useDispatch();
  const { userId } = useSelector(selectUser);
  const posts = useSelector(selectPosts);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const mapView = (coordinate) => {
    navigation.navigate("Map", coordinate);
  };
  const commentView = (postId, uri) => {
    navigation.navigate("Comments", { postId, uri });
  };
  const setLike = (postId) => {
    dispatch(addLike({postId, userId}));
    dispatch(getPosts());
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.list}>
          <UserCard />
          {posts.map(({ postId, name, adress, coordinate, uri }) => (
            <PostsCard
              key={postId}
              postId={postId}
              name={name}
              adress={adress}
              coordinate={coordinate}
              uri={uri}
              mapClick={mapView}
              commentClick={commentView}
              setLike={setLike}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Posts;