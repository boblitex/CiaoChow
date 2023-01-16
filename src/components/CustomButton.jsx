import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../theme/colors";

export const CustomButton = ({ onPress, buttonText, inverted, loading }) => {
  return (
    <TouchableOpacity onPress={onPress}>
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
        {loading ? (
          <ActivityIndicator color={"white"} size="large" />
        ) : (
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
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    height: 54,
    borderRadius: 10,
    padding: 15,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
