import React, { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Registr from "./Screens/RegistrationScreen/RegistrationScreen";
import Login from "./Screens/LoginScreen/LoginScreen";
import Comments from "./Screens/CommentsScreen/CommentsScreen";
import CreatePhoto from "./components/CreatePhoto/CreatePhoto";
import Map from "./Screens/MapScreen/MapScreen";
import Home from "./Screens/Home/Home";

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
        <MainStack.Screen
          name="Registration"
          component={Registr}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Map"
          component={Map}
          options={{ headerShown: true }}
        />
        <MainStack.Screen
          name="Comments"
          component={Comments}
          options={{ headerShown: true }}
        />
        <MainStack.Screen
          name="CreatePhoto"
          component={CreatePhoto}
          options={{ headerShown: true }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
export default App;