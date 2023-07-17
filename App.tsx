import React from "react";
import { HomeScreen } from "./src/screens/HomeScreen";
import { SafeAreaView } from "react-native";

const App = (): JSX.Element => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HomeScreen />
    </SafeAreaView>
  )
}

export default App;
