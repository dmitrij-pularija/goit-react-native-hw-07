import React, { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Registr from "./Screens/RegistrationScreen/RegistrationScreen";
import Login from "./Screens/LoginScreen/LoginScreen";
import Home from "./Screens/Home/Home";
import PostsScreen from "./Screens/PostsScreen/PostsScreen";
import CommentsScreen from "./Screens/CommentsScreen/CommentsScreen";
import CreatePostsScreen from "./Screens/CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "./Screens/ProfileScreen/ProfileScreen";

const MainStack = createStackNavigator();

const App = () => {
  const [isReady, setIsReady] = useState(false);

  const loadFonts = async () => {
    try {
      await Font.loadAsync({
        "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
        "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
      });
    } catch (error) {
      console.warn(error);
    } finally {
      SplashScreen.hideAsync();
      setIsReady(true);
    }
  };

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    loadFonts();
  }, []);

  if (!isReady) return null;
  
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen name="Registration" component={Registr} options={{ headerShown: false,}} />
        <MainStack.Screen name="Login" component={Login} options={{ headerShown: false,}} />
        <MainStack.Screen name="Home" component={Home} options={{ headerShown: false,}} />
        {/* <MainStack.Screen name="PostsScreen" component={PostsScreen} options={{ title: "Posts" }} />
        <MainStack.Screen name="CommentsScreen" component={CommentsScreen} options={{ title: "Comments" }} />
        <MainStack.Screen name="CreatePostsScreen" component={CreatePostsScreen} options={{ title: "Create post" }} />
        <MainStack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false,}}/> */}
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
export default App;