import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { CustomButton } from "../../components/CustomButton";
import Logo from "../../assets/images/logo.svg";
import { Container } from "../container/container";

export const HomeScreen = ({ navigation: { navigate } }) => {
  return (
    <Container>
      <View style={{ alignItems: "center" }}>
        <Logo />
        <CustomButton
          buttonText="Get Started"
          onPress={() => navigate("register")}
          inverted
        />
      </View>
    </Container>
  );
};
