import React, { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Provider } from "react-redux";
import Router from "./components/router";
import store from "./redux/store";
import * as Font from "expo-font";

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

 
  if (isReady) {
    return (
      <Provider store={store}>
        <Router />
        </Provider>
    );
  } else return null;
};

export default App;