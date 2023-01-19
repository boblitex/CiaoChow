import React from "react";
import { ScrollView, Text, View } from "react-native";
import { colors } from "src/theme/colors";
export const Description = () => {
  return (
    <ScrollView style={{ flex: 1, padding: 28, paddingTop: 38 }}>
      <Text
        style={{
          color: colors.Primary.gray3,
          lineHeight: 16,
        }}
      >
        The carrot is a root vegetable, most commonly observed as orange in
        color, though purple, black, red, white, and yellow cultivars exist, all
        of which are domesticated forms of the wild carrot, Daucus carota,
        native to Europe and Southwestern Asia.{"\n"}
        {"\n"}A medium-size carrot has 25 calories, 6 grams of carbs, and 2
        grams of fiber. The veggie is an excellent source of vitamin A,
        providing more than 200% of your daily requirement in just one carrot.
        Carrots are loaded with beta-carotene, a natural chemical that the body
        changes into vitamin A.
      </Text>
    </ScrollView>
  );
};
