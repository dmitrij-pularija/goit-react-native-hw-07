import React, { useState, useEffect } from "react";
import Container from "../../components/Container/Container";
import { signin } from "../../redux/auth/operations";
import { initialLogin } from '../../services/initial';
import { useDispatch } from "react-redux";
import { refresh } from '../../redux/auth/operations';
import {
  Text,
  View,
  Platform,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import styles from "./Login.styles.js";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [state, setstate] = useState(initialLogin);
  const [hidePassword, setHidePassword] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const chengHidePassword = () => setHidePassword(!hidePassword);
  const chengIsShowKeyboard = () => setIsShowKeyboard(true);

//   useEffect(() => {
//     dispatch(refresh());
// }, []);

  const emailHandler = (value) =>
    setstate((prevState) => ({ ...prevState, email: value }));
  const passwordHandler = (value) =>
    setstate((prevState) => ({ ...prevState, password: value }));

  const handleSubmit = () => {
    Keyboard.dismiss();
    setIsShowKeyboard(false);
    setHidePassword(true);
    dispatch(signin(state));
    // console.log(state);
    setstate(initialLogin);
    // navigation.navigate("Home");
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    setHidePassword(true);
    Keyboard.dismiss();
  };
  // console.log(isShowKeyboard);
  const { email, password } = state;
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <Container>
          <View style={styles.form}>
            <Text style={styles.formTitle}>Login</Text>
            <View style={styles.inputBlock}>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={emailHandler}
                onFocus={chengIsShowKeyboard}
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
                  onChangeText={passwordHandler}
                  onFocus={chengIsShowKeyboard}
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
              <Text style={styles.btnTitle}>Sign In</Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{ ...styles.limk, paddingBottom: isShowKeyboard ? 0 : 144 }}
            onPress={() => navigation.navigate("Registr")}
          >
            Don't have an account? Sign Up
          </Text>
        </Container>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Login;