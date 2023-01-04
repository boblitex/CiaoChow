import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../theme/colors";

export const CustomButton = ({ onPress, buttonText, inverted }) => {
  return (
    <View
      style={[
        styles.buttonStyle,
        {
          backgroundColor: inverted
            ? colors.Primary.primaryWhite
            : colors.Primary.primaryGreen,
        },
      ]}
    >
      <TouchableOpacity onPress={onPress}>
        <Text
          style={{
            color: inverted
              ? colors.Primary.primaryGreen
              : colors.Primary.primaryWhite,
            fontFamily: "SemiBold",
            fontSize: 18,
          }}
        >
          {buttonText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    height: 54,
    width: 335,
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
