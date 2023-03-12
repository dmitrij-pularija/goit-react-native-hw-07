import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import styles from "./CommentsScreen.styles.js";

const Comments = ({
  navigation,
  route: {
    params: { id, uri },
  },
}) => {
  const [comment, setComment] = useState("");
  const commentHandler = (value) => setComment(value);
  const handleSend = () => {
    console.log(comment);
    setComment("");
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.imageBox}>
          <Image style={styles.image} source={{ uri }} />
        </View>
        <ScrollView style={styles.list}>
          <View style={styles.item}>
            <View style={styles.avatarBox}>
              <Image
                style={styles.avatar}
                source={require("../../assets/images/Ellipse.jpg")}
              />
            </View>
            <View style={styles.textBox}>
              <Text style={styles.coment}>
                Really love your most recent photo. Ive been trying to capture
                the same thing for a few months and would love some tips!
              </Text>
              <Text style={styles.data}>09 июня, 2020 | 08:40</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          onChangeText={commentHandler}
          placeholder="Comment..."
          value={comment}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.btnSend}
          onPress={handleSend}
        >
          <Feather name="arrow-up" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Comments;