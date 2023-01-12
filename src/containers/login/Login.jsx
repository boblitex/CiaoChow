import { Container } from "containers/container/container";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import BackArrow from "assets/images/Vector.svg";
import Icon from "assets/images/icon2.svg";
import { colors } from "src/theme/colors";
import { CustomButton } from "components/CustomButton";

export const Login = ({ navigation: { navigate, goBack } }) => {
  return (
    <Container background>
      <KeyboardAvoidingView
        keyboardVerticalOffset={10}
        style={{ flex: 1 }}
        behavior={Platform.select({ ios: "padding", android: "height" })}
      >
        <TouchableOpacity
          onPress={goBack}
          style={{
            marginTop: 20,
            width: "20%",
            alignItems: "center",
            paddingHorizontal: 10,
          }}
        >
          <BackArrow />
        </TouchableOpacity>
        <View style={styles.heroContainer}>
          <Text style={styles.heroText}>Login</Text>
          <Icon height={317} width={129} marginRight={30} />
        </View>
        <ScrollView style={styles.textInputContainer}>
          <Text style={{ margin: 10 }}>Email</Text>
          <TextInput
            keyboardType="email-address"
            placeholder="yourmail@mail.com"
            style={{
              backgroundColor: colors.Primary.gray6,
              height: 46,
              borderRadius: 10,
              marginHorizontal: 10,
              marginVertical: 10,
              padding: 13,
            }}
          />
          <Text style={{ margin: 10 }}>password</Text>
          <TextInput
            secureTextEntry={true}
            keyboardType="default"
            placeholder="password"
            style={{
              backgroundColor: colors.Primary.gray6,
              height: 46,
              borderRadius: 10,
              marginHorizontal: 10,
              paddingHorizontal: 13,
            }}
          />
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={styles.buttonContainer}>
        <CustomButton
          buttonText={"Login"}
          onPress={() => navigate("foodScreen")}
        />
        <Text
          style={{
            alignSelf: "center",
            paddingTop: 25,
            color: colors.Primary.primaryGreen,
          }}
          onPress={() => navigate("register")}
        >
          Don't have an account?{" "}
          <Text style={{ fontWeight: "700" }}>Register</Text>
        </Text>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  heroContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  heroText: {
    color: colors.Primary.primaryWhite,
    fontWeight: "700",
    fontSize: 34,
  },
  textInputContainer: { paddingHorizontal: 10 },
  buttonContainer: { paddingHorizontal: 20, marginBottom: "20%" },
});
