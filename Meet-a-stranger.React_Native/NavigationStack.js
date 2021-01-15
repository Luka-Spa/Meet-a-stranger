import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginOptions from "./screens/LoginOptions";
import Login from "./screens/Login";

const Stack = createStackNavigator();

const NavigationStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#9AC4F8",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
      }}
    >
      <Stack.Screen name="LoginOptions" component={LoginOptions} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export { NavigationStack };
