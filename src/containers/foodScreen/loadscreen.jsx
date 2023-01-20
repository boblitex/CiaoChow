import React from "react";
import { SafeAreaView } from "react-native";
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from "rn-placeholder";

export const Loadscreen = () => {
  return (
    <SafeAreaView>
      <Placeholder
        Animation={Fade}
        style={{
          paddingHorizontal: 25,
        }}
      >
        <PlaceholderMedia
          size={350}
          style={{ alignSelf: "center", marginBottom: 20 }}
        />
        <PlaceholderLine width={30} height={40} />
        {Array(10)
          .fill("")
          .map((line, i) => (
            <PlaceholderLine key={i} />
          ))}
      </Placeholder>
    </SafeAreaView>
  );
};
