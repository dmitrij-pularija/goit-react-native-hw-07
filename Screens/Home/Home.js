import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import PostsScreen from "../PostsScreen/PostsScreen";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import HeaderButton from "../../components/Button/Button";

// import { selectUser } from "../../redux/auth/selectors";

import { signout } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

const Tabs = createBottomTabNavigator();
const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const icons = {
    PostsScreen: "grid",
    CreatePostsScreen: "plus",
    ProfileScreen: "user",
  };

  // console.log(useSelector(selectUser));
  return (
    <Tabs.Navigator
      initialRouteName="PostsScreen"
      screenOptions={({ route: { name } }) => ({
        tabBarIcon: ({ color }) => (
          <Feather name={icons[name]} size={24} color={color} />
        ),
        tabBarStyle: {
          width: "100%",
          height: 83,
          paddingTop: 9,
          borderTopColor: "#BDBDBD",
          borderTopWidth: 1,
          alignItems: "center",
        },
        tabBarItemStyle: {
          height: 40,
          borderRadius: 50,
          maxWidth: 70,
          marginHorizontal: 5,
        },
        tabBarActiveBackgroundColor: "#FF6C00",
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#BDBDBD",
        tabBarShowLabel: false,
        tabBarOptions: { style: { display: "none" } },
      })}
    >
      <Tabs.Group
        screenOptions={{
          headerStyle: {
            borderBottomWidth: 1,
            borderBottomColor: "#BDBDBD",
            backgroundColor: "#FFFFFF",
          },
          headerTitleStyle: {
            fontFamily: "Roboto-Bold",
            fontSize: 17,
            color: "#212121",
          },
          headerStatusBarHeight: 44,
          headerTitleAlign: "center",
        }}
      >
        <Tabs.Screen
          name="PostsScreen"
          component={PostsScreen}
          options={{
            headerTitle: "Posts",
            headerRight: () => (
              <HeaderButton
                name={"log-out"}
                onPress={() => dispatch(signout())}
              />
            ),
            headerRightContainerStyle: { paddingRight: 16 },
          }}
        />
        <Tabs.Screen
          name="CreatePostsScreen"
          component={CreatePostsScreen}
          options={{
            headerTitle: "Create post",
            headerLeft: () => (
              <HeaderButton
                name={"arrow-left"}
                onPress={() => navigation.navigate("PostsScreen")}
              />
            ),
            headerLeftContainerStyle: { paddingLeft: 16 },
            tabBarStyle: { display: "none" },
            unmountOnBlur: true,
          }}
        />
      </Tabs.Group>
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tabs.Navigator>
  );
};

export default Home;