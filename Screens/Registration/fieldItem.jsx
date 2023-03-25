import styles from "./Registration.styles";
import {
    Text,
    View,
    Image,
    VirtualizedList,
    Platform,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
  } from "react-native";

const Item = ({name, placeholder, touched, errors, hidePassword, onFocus, onBlur, onChangeText, onSubmit}) => {
    return (
        <>
        {name !== "button" ? (
          <>
        <TextInput
          style={styles.input}
          secureTextEntry={name === "password" ? hidePassword : false}
          value={name}
          onFocus={onFocus()}
          onChangeText={name => onChangeText(name)}
          onBlur={name => onBlur(name)}
          placeholder={placeholder}
          autoCapitalize="none"
        />
      <Text style={{color: "red"}}>{touched[name] && errors[name]}</Text>
      </>
        ) : (
          <TouchableOpacity
          activeOpacity={0.8}
          style={styles.btn}
          onPress={onSubmit()}
        >
          <Text style={styles.btnTitle}>{placeholder}</Text>
        </TouchableOpacity>
        )}
      </>
    );
};
    export default Item;
