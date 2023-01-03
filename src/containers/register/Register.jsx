import { Container } from "containers/container/container";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import BackArrow from "assets/images/Vector.svg";

export const Register = ({ navigation: { navigate, goBack } }) => {
  return (
    <Container background>
      <View style={{ marginLeft: 40, marginTop: 20 }}>
        <TouchableOpacity onPress={goBack}>
          <BackArrow />
        </TouchableOpacity>
      </View>
    </Container>
  );
};
