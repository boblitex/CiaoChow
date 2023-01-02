import React from "react";
import { Text, View } from "react-native";
import { CustomButton } from "../../components/CustomButton";
export const HomeScreen = ({ navigation: { navigate } }) => {
  return (
    <>
      <Text>Home</Text>
      <View style={{ alignItems: "center" }}>
        <CustomButton
          buttonText="Get Started"
          onPress={() => navigate("register")}
          inverted
        />
      </View>
    </>
  );
};
