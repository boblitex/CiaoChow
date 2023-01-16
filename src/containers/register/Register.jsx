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
import Icon from "assets/images/icon1.svg";
import { colors } from "src/theme/colors";
import { CustomButton } from "components/CustomButton";
import { Controller, useForm } from "react-hook-form";

export const Register = ({ navigation: { navigate, goBack } }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  console.log("BASE", process.env.BASE_URL);

  const onSubmit = (data) => {
    console.log(data);
    const { email, password, username } = data;
  };

  return (
    <Container background>
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
        <Text style={styles.heroText}>Register</Text>
        <Icon height={316} width={129} marginRight={30} />
      </View>
      <KeyboardAvoidingView
        keyboardVerticalOffset={10}
        style={{ flex: 1 }}
        behavior={Platform.select({ ios: "padding", android: "height" })}
      >
        <ScrollView style={styles.textInputContainer}>
          <Text style={{ margin: 6, marginLeft: 10 }}>Username</Text>
          <Controller
            control={control}
            name="username"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                keyboardType="default"
                placeholder="muncher"
                style={styles.textStyle}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
              />
            )}
          />

          <Text style={{ margin: 6, marginLeft: 10 }}>Email</Text>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                keyboardType="email-address"
                placeholder="yourmail@mail.com"
                style={styles.textStyle}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
              />
            )}
          />
          <Text style={{ marginVertical: 6, marginLeft: 10 }}>password</Text>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                secureTextEntry={true}
                keyboardType="default"
                placeholder="password"
                style={styles.textStyle}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
              />
            )}
          />
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={styles.buttonContainer}>
        <CustomButton
          buttonText={"Register"}
          onPress={handleSubmit(onSubmit)}
        />
        <Text
          style={{
            alignSelf: "center",
            paddingTop: 25,
            color: colors.Primary.primaryGreen,
          }}
          onPress={() => navigate("login")}
        >
          Have an account? <Text style={{ fontWeight: "700" }}>Login</Text>
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
  textStyle: {
    backgroundColor: colors.Primary.gray6,
    height: 46,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 13,
  },
  buttonContainer: { paddingHorizontal: 20 },
});
