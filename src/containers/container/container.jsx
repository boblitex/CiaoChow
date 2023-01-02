import React from "react";
import { SafeAreaView, View } from "react-native";
import Background from "assets/images/background.svg";
export const Container = ({ children, background }) => {
  return (
    <SafeAreaView>
      {background && (
        <View style={{ position: "absolute", left: 0, right: 0 }}>
          <Background width={"100%"} />
        </View>
      )}
      {children}
    </SafeAreaView>
  );
};
