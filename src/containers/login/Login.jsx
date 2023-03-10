import { Container } from "containers/container/container";
import React from "react";
import {
  Alert,
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
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { loginHelper } from "utils/authHelper";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Login = ({ navigation: { navigate, goBack } }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate: loginMutation, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginHelper(email, password),
    onSuccess: async (data) => {
      await AsyncStorage.setItem("jwt", data?.data?.jwt);
      navigate("foodScreen");
    },
    onError: () => {
      Alert.alert("Login Failed", "Try Again", [
        {
          text: "Retry Login",
          onPress: () => {},
          style: "cancel",
        },
      ]);
    },
  });

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      loginMutation({ email, password });
    } catch (error) {
      //ideally use an error reporting tool like bugsnag
      console.error(error.message);
    }
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
        <Text style={styles.heroText}>Login</Text>
        <Icon height={317} width={129} marginRight={30} />
      </View>
      <KeyboardAvoidingView
        keyboardVerticalOffset={40}
        style={{ flex: 1 }}
        behavior={Platform.select({ ios: "padding", android: "height" })}
      >
        <ScrollView style={styles.textInputContainer}>
          <Text style={{ margin: 10 }}>Email</Text>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                keyboardType="email-address"
                placeholder="yourmail@mail.com"
                style={styles.textInputStyle}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
              />
            )}
          />
          <Text style={{ margin: 10 }}>password</Text>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                secureTextEntry={true}
                keyboardType="default"
                placeholder="password"
                style={styles.textInputStyle}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
              />
            )}
          />
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot password</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={styles.buttonContainer}>
        <CustomButton
          buttonText={"Login"}
          onPress={handleSubmit(onSubmit)}
          loading={isLoading}
        />
        <Text
          style={{
            alignSelf: "center",
            paddingTop: 25,
            color: colors.Primary.primaryGreen,
          }}
          onPress={() => navigate("register")}
        >
          Don't have an account?
          <Text style={{ fontWeight: "700" }}> Register</Text>
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
  textInputStyle: {
    backgroundColor: colors.Primary.gray6,
    height: 46,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 13,
  },
  buttonContainer: { paddingHorizontal: 20, marginBottom: "20%", flex: 0.15 },
  forgotPassword: {
    color: colors.Primary.primaryGreen,
    alignSelf: "flex-end",
    fontSize: 10,
    paddingRight: 20,
  },
});
