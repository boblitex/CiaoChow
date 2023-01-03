import React from "react";
import { View } from "react-native";

export const SlideDots = ({ color }) => {
  return (
    <View
      style={{
        height: 8,
        width: 8,
        backgroundColor: color,
        borderRadius: 5,
        marginHorizontal: 2,
      }}
    ></View>
  );
};
