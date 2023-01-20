import React from "react";
import { ScrollView, Text } from "react-native";
import { colors } from "src/theme/colors";

export const ChowBody = ({ chowText }) => {
  return (
    <ScrollView style={{ flex: 1, padding: 28, paddingTop: 38 }}>
      <Text
        style={{
          color: colors.Primary.gray3,
          lineHeight: 16,
        }}
      >
        {chowText}
      </Text>
    </ScrollView>
  );
};
