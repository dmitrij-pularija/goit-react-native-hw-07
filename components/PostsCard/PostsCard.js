import { Feather } from "@expo/vector-icons";
import { Text, View, Image } from "react-native";
import styles from "./PostsCard.styles.js";

const PostsCard = ({
  id,
  name,
  address,
  coordinate,
  uri,
  mapClick,
  commentClick,
}) => {
  return (
    <View>
      <View style={styles.imageBox}>
        <Image style={styles.image} source={{ uri }} />
      </View>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.detailsBox}>
        <View style={styles.activityBox}>
          <View style={styles.activity}>
            <Text onPress={() => commentClick(id, uri)}>
              <Feather name="message-circle" size={24} color="#BDBDBD" />
            </Text>
            <Text>0</Text>
          </View>
          <View style={styles.activity}>
            <Feather name="thumbs-up" size={24} color="#BDBDBD" />
            <Text>0</Text>
          </View>
        </View>
        <Text style={styles.location} onPress={() => mapClick(coordinate)}>
          <Feather
            style={styles.icon}
            name="map-pin"
            size={24}
            color="#BDBDBD"
          />
          <Text>{address}</Text>
        </Text>
      </View>
    </View>
  );
};

export default PostsCard;