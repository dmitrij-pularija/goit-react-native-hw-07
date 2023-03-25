import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { initialPost } from "../../services/initial";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { createPost, getPosts } from "../../redux/data/operations";
import { delPhoto } from "../../redux/prestate/operations";
import { takePhoto } from "../../services/ImagePicker";
import { selectPrestate } from "../../redux/prestate/selectors";
import GetCurrentLocation from "../../services/location";
import {
  Text,
  View,
  Alert,
  Image,
  TextInput,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import styles from "./CreatePosts.styles.js";

const CreatePosts = ({ navigation }) => {
  const dispatch = useDispatch();
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialPost);
  const { uri } = useSelector(selectPrestate);
  const { name, adress, coordinate } = state;
  const author = useSelector(selectUser);

  const imageHandler = () => takePhoto(dispatch);
  const nameHandler = (value) =>
    setState((prevState) => ({ ...prevState, name: value }));
  const adressHandler = (value) =>
    setState((prevState) => ({ ...prevState, adress: value }));
  const handleSubmit = () => {
    if (!uri || !name || !adress)
      return Alert.alert("Not all fields are filled!");
    Keyboard.dismiss();
    dispatch(createPost({ author, uri, name, adress, coordinate }));
    setState(initialPost);
    dispatch(getPosts());
    navigation.navigate("Posts");
  };
  const chengIsShowKeyboard = () => setIsShowKeyboard(true);
  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };
  const handleDel = () => {
    dispatch(delPhoto(uri));
    setState(initialPost);
  };

  useEffect(() => {
    uri && GetCurrentLocation({ setState });
  }, [uri]);

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        {uri ? (
          <Image source={{ uri }} style={styles.imageBox} />
        ) : (
          <View
            style={{ ...styles.imageBox, marginTop: isShowKeyboard ? -32 : 32 }}
          >
            <TouchableOpacity
              style={styles.cameraButton}
              activeOpacity={0.8}
              onPress={imageHandler}
            >
              <Feather name="camera" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          </View>
        )}
        <Text style={styles.text}>Upload a photo</Text>
        <View style={styles.inputBlock}>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={nameHandler}
            onFocus={chengIsShowKeyboard}
            placeholder="Name..."
          />
          <View style={styles.locationField}>
            <Feather
              name="map-pin"
              size={24}
              color="#BDBDBD"
              style={styles.locationIcon}
            />
            <TextInput
              style={{ ...styles.input, ...styles.locationInput }}
              onChangeText={adressHandler}
              onFocus={chengIsShowKeyboard}
              placeholder="Location..."
              value={adress}
            />
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.btn}
          onPress={handleSubmit}
        >
          <Text style={styles.btnTitle}>Publish</Text>
        </TouchableOpacity>
        <View style={styles.btnTrashBox}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.btnTrash}
            onPress={handleDel}
          >
            <Feather name="trash-2" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default CreatePosts;