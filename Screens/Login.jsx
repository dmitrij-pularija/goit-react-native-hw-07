import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AuthForm from "../components/AuthForm/AuthForm";
import Container from "../components/Container/Container";
import styles from "../components/AuthForm/AuthForm.styles";
import { setIsShowKeyboard } from "../redux/prestate/slice";
import { selectPrestate } from "../redux/prestate/selectors";
import {
  Text,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();

  const keyboardHide = () => {
    Keyboard.dismiss();
    dispatch(setIsShowKeyboard(false));
  };

  const { isShowKeyboard } = useSelector(selectPrestate);

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <Container>
          <AuthForm type={"auth"} />
          <Text
            style={{ ...styles.limk, marginBottom: isShowKeyboard ? 0 : 144 }}
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