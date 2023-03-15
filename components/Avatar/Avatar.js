import { useSelector } from "react-redux";
import { Feather } from "@expo/vector-icons";
import { View, Image, TouchableOpacity } from "react-native";
import { selectUser } from "../../redux/auth/selectors";
import styles from "./Avatar.styles.js";

const Avatar = () => {
  const { photoURL } = useSelector(selectUser);

  return (
    <View style={styles.add}>
      <Image
        style={styles.avatar}
        source={
          photoURL
            ? { uri: photoURL }
            : require("../../assets/images/avatar.png")
        }
      />
      <TouchableOpacity style={styles.addBtn}>
        <Feather name="plus" size={13} color="#FF6C00" />
      </TouchableOpacity>
    </View>
  );
};

export default Avatar;