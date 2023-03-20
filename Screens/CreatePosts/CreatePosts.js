import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { initialPost } from '../../services/initial';
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { createPost, getPosts } from "../../redux/data/operations";
import { setTimeStamp } from "../../redux/prestate/slice";
import { delPhoto } from "../../redux/prestate/operations";
import { selectPrestate } from "../../redux/prestate/selectors";
import * as Location from "expo-location";
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

// const initialState = {
//   name: "",
//   adress: "",
//   coordinate: {},
// };

const CreatePosts = ({ navigation}) => {
  const dispatch = useDispatch();
  const { uri, timeStamp} = useSelector(selectPrestate);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialPost);
  const { name, adress, coordinate } = state;
  const author = useSelector(selectUser);

  const imageHandler = () => {
      GetCurrentLocation();
  navigation.navigate("CreatePhoto");
  };
  const nameHandler = (value) =>
    setState((prevState) => ({ ...prevState, name: value }));
  const adressHandler = (value) =>
    setState((prevState) => ({ ...prevState, adress: value }));
  const handleSubmit = () => {
    Keyboard.dismiss();
    // const id = uuidv4();
    // dispatch(createPost({author, uri, name, adress, coordinate}));
    dispatch(createPost({ author, uri, name, adress, coordinate }));

    setState(initialPost);
    dispatch(setTimeStamp(null));
    dispatch(getPosts());
    navigation.navigate("Posts");
  };
  // useEffect(() => {
  // const { uri } = useSelector(selectURI);

  //   if (route.params) {
  //     setState((prevState) => ({ ...prevState, ...route.params }));
  //     GetCurrentLocation();
  //   }
  // }, [dispatch]);

  const GetCurrentLocation = async () => {
    let permission = await Location.requestForegroundPermissionsAsync();
    if (!permission.granted) {
      Alert.alert(
        "Permission not granted",
        "Allow the app to use location service.",
        [{ text: "OK" }],
        { cancelable: false }
      );
    }
    const { coords } = await Location.getCurrentPositionAsync();

    if (coords) {
      const { latitude, longitude } = coords;
      setState((prevState) => ({
        ...prevState,
        coordinate: { latitude, longitude },
      }));
      const response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      const { country, city, subregion } = response[0];
      setState((prevState) => ({
        ...prevState,
        adress: `${country}, ${city ? city : subregion}`,
      }));
    }
  };
  const chengIsShowKeyboard = () => setIsShowKeyboard(true);
  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handleDel = () => {
    dispatch(delPhoto({timeStamp}));
    setState(initialPost)};

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
            autoCapitalize="none"
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
              autoCapitalize="none"
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