import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import Container from "../../components/Container/Container";
import Avatar from "../../components/Avatar/Avatar";
import styles from "./Registration.styles";
import { initialRegistr } from '../../services/initial';
import { selectPrestate } from "../../redux/prestate/selectors";
// import { delPhoto } from "../../redux/prestate/operations";
// import { selectImage } from "../../services/ImagePicker";
// import * as picker  from "../../services/ImagePicker/ImagePicker";
import * as ImagePicker from "expo-image-picker";

import { signup } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import {
  Text,
  View,
  Image,
  Platform,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const Registr = ({ navigation }) => {
  const dispatch = useDispatch();
  const [state, setState] = useState(initialRegistr);
  const [hidePassword, setHidePassword] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const { uri } = useSelector(selectPrestate);
  const { displayName, email, password } = state;

  // useEffect(() => {
    // (async () => {
    //   if (Constants.platform.ios) {
    //     const cameraRollStatus =
    //       await ImagePicker.requestMediaLibraryPermissionsAsync();
    //     const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
    //     if (
    //       cameraRollStatus.status !== "granted" ||
    //       cameraStatus.status !== "granted"
    //     ) {
    //       alert("Sorry, we need these permissions to make this work!");
    //     }
    //   }
    // })();
  // }, []);

  const chengHidePassword = () => setHidePassword(!hidePassword);
  const loginHandler = (value) =>
    setState((prevState) => ({ ...prevState, displayName: value }));
  const emailHandler = (value) =>
    setState((prevState) => ({ ...prevState, email: value }));
  const passwordHandler = (value) =>
    setState((prevState) => ({ ...prevState, password: value }));

  const handleSubmit = () => {
    Keyboard.dismiss();
    setIsShowKeyboard(false);
console.log(displayName, email, password, uri);
    dispatch(signup({displayName, email, password, photoURL: uri }));
    setState(initialRegistr);
  };

  const keyboardHide = () => {
    Keyboard.dismiss();
    setIsShowKeyboard(false);
    setHidePassword(true);
  };
  
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <Container>
        <Avatar />  
          <View style={styles.form}>
            <Text style={styles.formTitle}>Registration</Text>
            <View style={styles.inputBlock}>
              <TextInput
                style={styles.input}
                value={displayName}
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={loginHandler}
                placeholder="Login"
                autoCapitalize="none"
              />
              <TextInput
                style={styles.input}
                value={email}
                onFocus={() => setIsShowKeyboard(true)}
                onChangeText={emailHandler}
                placeholder="E-mail address"
                inputMode="email"
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <View style={styles.passwordField}>
                <TextInput
                  style={styles.input}
                  secureTextEntry={hidePassword}
                  value={password}
                  onFocus={() => setIsShowKeyboard(true)}
                  onChangeText={passwordHandler}
                  placeholder="Password"
                />
                <TouchableOpacity
                  style={styles.showBtn}
                  onPress={chengHidePassword}
                >
                  <Text style={styles.showBtnTitle}>Show</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btn}
              onPress={handleSubmit}
            >
              <Text style={styles.btnTitle}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{ ...styles.limk, marginBottom: isShowKeyboard ? 0 : 78 }}
            onPress={() => navigation.navigate("Login")}
          >
            Already have an account? Sign In
          </Text>
        </Container>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Registr;