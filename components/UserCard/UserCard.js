import { View, Text, Image } from "react-native";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import styles from "./UserCard.styles.js";

const UserCard = () => {
  const { nickName, email, photoURL } = useSelector(selectUser);
  return (
    <View style={styles.user}>
      <Image
        style={styles.image}
        source={
          photoURL ? { uri: photoURL } : { uri: "../../assets/images/avatar.png" }

          // photoURL ? { uri: photoURL } : require("../../assets/images/avatar.png")
        }
      />
      <View style={styles.info}>
        <Text style={styles.name}>{nickName}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
};

export default UserCard;