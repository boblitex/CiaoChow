import React from "react";
import { SafeAreaView, View } from "react-native";
import Background from "assets/images/background.svg";
import { colors } from "src/theme/colors";
export const Container = ({ children, background, lowerBackgroundGreen }) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: lowerBackgroundGreen
          ? colors.Primary.primaryGreen
          : colors.Primary.primaryWhite,
        flex: 1,
      }}
    >
      {background && (
        <View style={{ position: "absolute", left: 0, right: 0 }}>
          <Background width={"100%"} />
        </View>
      )}
      {children}
    </SafeAreaView>
  );
};
