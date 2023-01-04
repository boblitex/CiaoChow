import { Container } from "containers/container/container";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import BackArrow from "assets/images/Vector.svg";
import Icon from "assets/images/icon1.svg";
import { colors } from "src/theme/colors";
import { CustomButton } from "components/CustomButton";

export const Register = ({ navigation: { navigate, goBack } }) => {
  return (
    <Container background>
      <View style={{ marginLeft: 40, marginTop: 20, width: "20%" }}>
        <TouchableOpacity onPress={goBack}>
          <BackArrow />
        </TouchableOpacity>
      </View>
      <View style={styles.heroContainer}>
        <Text style={styles.heroText}>Register</Text>
        <Icon height={316} width={129} />
      </View>
      <View style={styles.textInputContainer}></View>
      <View style={styles.buttonContainer}>
        <CustomButton buttonText={"Register"} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  heroContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    marginTop: 20,
  },
  heroText: {
    color: colors.Primary.primaryWhite,
    fontWeight: "700",
    fontSize: 34,
  },
  textInputContainer: {},
  buttonContainer: {
    alignItems: "center",
  },
});
