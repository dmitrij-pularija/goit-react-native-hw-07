import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

export const useFont = ()=> {
const [isReady, setIsReady] = useState(false);
const loadFonts = async () => {
  try {
    await Font.loadAsync({
      "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
      "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
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

return { isReady }
};