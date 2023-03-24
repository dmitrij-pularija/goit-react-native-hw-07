import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import * as SplashScreen from "expo-splash-screen";
import { Provider } from "react-redux";
import Router from "./components/router";
import store from "./redux/store";
import { getPermissions } from "./services/ImagePicker";

// import { refresh } from "./redux/auth/operations";
import { useFont } from "./services/hooks";
// import * as Font from "expo-font";

const App = () => {
  const { isReady } = useFont();
  // const dispatch = useDispatch();

  useEffect(() => {
    getPermissions();
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