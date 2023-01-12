import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../containers/home/HomeScreen";
import { Register } from "../containers/register/Register";
import { Login } from "../containers/login/Login";
import { FoodScreen } from "containers/foodScreen";

const Stack = createNativeStackNavigator();

export const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="homescreen" component={HomeScreen} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="foodScreen" component={FoodScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
