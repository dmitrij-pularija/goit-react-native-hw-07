import { View, Text, Image } from "react-native";
import styles from "./UserCard.styles.js";

const UserCard = () => {
  return (
    <View style={styles.user}>
      <Image
        style={styles.image}
        source={require("../../assets/images/user.jpg")}
      />
      <View style={styles.info}>
        <Text style={styles.name}>Natali Romanova</Text>
        <Text style={styles.email}>email@example.com</Text>
      </View>
    </View>
  );
};

export default UserCard;
