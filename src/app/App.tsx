/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Navigation } from "./navigation";
import { Provider } from "react-redux";
import { store } from "box/app/store";

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar translucent={true} />
        <Navigation />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
