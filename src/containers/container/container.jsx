import React from "react";
import { Keyboard, SafeAreaView, View } from "react-native";
import Background from "assets/images/background.svg";
import { colors } from "src/theme/colors";
import { StatusBar } from "expo-status-bar";

export const Container = ({ children, background, lowerBackgroundGreen }) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: lowerBackgroundGreen
          ? colors.Primary.primaryGreen
          : colors.Primary.primaryWhite,
        flex: 1,
      }}
      onStartShouldSetResponder={() => true}
      onResponderRelease={() => Keyboard.dismiss()}
    >
      {background && (
        <View style={{ position: "absolute", left: 0, right: 0 }}>
          <Background width={"100%"} />
        </View>
      )}
      {children}
      <StatusBar style="light" />
    </SafeAreaView>
  );
};
