import { StatusBar } from "expo-status-bar";
import React from "react";
import Style from "./Styles";
import { NavigationStack } from "./NavigationStack";
import Axios from "axios";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StyleSheet } from "react-native";

export default function App() {
  const [jwt, setJwt] = React.useState();
  Axios.defaults.baseURL = "https://meet-a-stranger-api.herokuapp.com/api";
  Axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;

  return (
    <SafeAreaView style={Style.container}>
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
