import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Registr from "../Screens/Registration";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "../redux/auth/selectors";
import Comments from "../Screens/Comments/Comments";
import { refresh } from "../redux/auth/operations";
import Login from "../Screens/Login";
import React, { useEffect } from "react";
import Map from "../Screens/Map/Map";
import Home from "../Screens/Home";

const PrivateStack = createStackNavigator();
const PublicStack = createStackNavigator();

const PublicNavigator = () => {
  return (
    <PublicStack.Navigator initialRouteName="Login">
      <PublicStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <PublicStack.Screen
        name="Registr"
        component={Registr}
        options={{ headerShown: false }}
      />
    </PublicStack.Navigator>
  );
};

const PrivateNavigator = () => {
  return (
    <PrivateStack.Navigator initialRouteName="Home">
      <PrivateStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <PrivateStack.Group
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
          // headerStatusBarHeight: 44,
          headerTitleAlign: "center",
        }}
      >
        <PrivateStack.Screen
          name="Map"
          component={Map}
          options={{ headerShown: true }}
        />
        <PrivateStack.Screen
          name="Comments"
          component={Comments}
          options={{ headerShown: true }}
        />
      </PrivateStack.Group>
    </PrivateStack.Navigator>
  );
};

const Router = () => {
  const dispatch = useDispatch();
  const { userId } = useSelector(selectUser);
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  console.log(state);
  return (
    <NavigationContainer>
      {userId ? <PrivateNavigator /> : <PublicNavigator />}
    </NavigationContainer>
  );
};

export default Router;