import React from "react";
import { Text, View } from "react-native";
export const Nutrition = ({ NutritionText }) => {
  return (
    <View style={{ flex: 1 }}>
      <Text>{NutritionText}</Text>
    </View>
  );
};
