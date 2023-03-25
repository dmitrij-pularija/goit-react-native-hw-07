import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "../components/Container/Container";
import Avatar from "../components/Avatar/Avatar";
import styles from "../components/AuthForm/AuthForm.styles";
import AuthForm from "../components/AuthForm/AuthForm";
import { setIsShowKeyboard } from "../redux/prestate/slice";
import { selectPrestate } from "../redux/prestate/selectors";
import {
  Text,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const Registr = ({ navigation }) => {
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
          <Avatar />
          <AuthForm type={"registr"} />
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