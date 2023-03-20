import Moment from 'moment';
import 'moment/locale/ru';
import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { selectComments } from "../../redux/data/selectors";
import { createComment, getComments } from "../../redux/data/operations";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import styles from "./Comments.styles.js";

const Comments = ({
  navigation,
  route: {
    params: { postId, uri },
  },
}) => {
  Moment.locale('ru');
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");
  // const { userId, photoURL} = useSelector(selectUser);
  const user = useSelector(selectUser);

useEffect(() => {
  dispatch(getComments(postId));
}, []);

  const commentHandler = (value) => setComment(value);
  const handleSend = () => {
    const currentDate = Moment().format('DD.MM.YYYY');
    const currentTime = Moment().format('HH:mm');
    const { userId, photoURL} = user;
    dispatch(createComment({postId, userId, photoURL, comment, timeStamp: `${currentDate} | ${currentTime}`}));
    setComment("");
  dispatch(getComments(postId));
  };
  const comments = useSelector(selectComments);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.imageBox}>
          <Image style={styles.image} source={{ uri }} />
        </View>
        <View style={styles.list}>
        {comments.map(({ comentId, userId, photoURL, comment, timeStamp}) => (
          <View key={comentId} style={{...styles.item, flexDirection: userId === user.userId ? "row-reverse" : "row"}}>
            <View style={styles.avatarBox}>
              <Image
                style={styles.avatar}
                source={{ uri:  photoURL}}
              />
            </View>
            <View style={userId === user.userId ? styles.ownerComment : styles.guestComment}>
              <Text style={styles.coment}>{comment}</Text>
              <Text style={{...styles.data, textAlign: userId === user.userId ? "left" : "right"}}>{timeStamp}</Text>
            </View>
          </View>
          ))}
        </View>
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