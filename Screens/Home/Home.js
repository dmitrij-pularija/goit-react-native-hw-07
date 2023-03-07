import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons';
import PostsScreen from "../PostsScreen/PostsScreen";
// import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";

const Tabs = createBottomTabNavigator();
const LogOut = () => {
    return (
        <TouchableWithoutFeedback
        onPress={() => alert("Log Out!")}
      >
        <Feather name="log-out" size={24} color="#BDBDBD" />
        </TouchableWithoutFeedback>
        );
    };
const Home = () => {
  const icons = {
    PostsScreen: 'grid',
    CreatePostsScreen: 'plus',
    ProfileScreen: 'user',
  };

  return (
    <Tabs.Navigator initialRouteName="PostsScreen"
    screenOptions={({ route: { name } }) => ({
      tabBarIcon: ({color}) => <Feather name={icons[name]} size={24} color={color} />,
      tabBarStyle: { width: "100%", height: 83, paddingTop: 9, borderTopColor: "#BDBDBD", borderTopWidth: 1, alignItems: "center"},  
      tabBarItemStyle: { height: 40, borderRadius: 50, maxWidth: 70, marginHorizontal: 5 },
      tabBarActiveBackgroundColor: "#FF6C00",
      tabBarActiveTintColor: "#FFFFFF",
      tabBarInactiveTintColor: "#BDBDBD",
      tabBarShowLabel: false,
    })}
  >
    <Tabs.Screen name="PostsScreen" component={PostsScreen} options={{ headerStyle: { borderBottomWidth: 1, borderBottomColor: "#BDBDBD", backgroundColor: "#FFFFFF"}, headerTitleStyle: { fontFamily: "Roboto-Bold", fontSize: 17, color: '#212121' }, headerStatusBarHeight: 44, headerTitleAlign: "center" , headerTitle: "Posts", headerRight: (props) => <LogOut {...props} />, headerRightContainerStyle: { paddingRight: 16} }}/>
    <Tabs.Screen name="CreatePostsScreen" getComponent={() => require('../CreatePostsScreen/CreatePostsScreen').default} />
    <Tabs.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false,}} />
  </Tabs.Navigator>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

export default Home;