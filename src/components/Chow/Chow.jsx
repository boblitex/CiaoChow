import { CustomButton } from "components/CustomButton";
import { SlideDots } from "components/SlideDots";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { colors } from "src/theme/colors";
import { ChowBody } from "./ChowBody";
import LikeButton from "assets/images/heart.svg";

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: colors.Primary.primaryGreen,
      width: "23%",
      marginHorizontal: 55,
      height: 4,
      borderTopStartRadius: 20,
      borderTopEndRadius: 20,
    }}
    style={{
      backgroundColor: "white",
      borderBottomColor: colors.Primary.gray4,
      borderBottomWidth: 0.5,
    }}
    labelStyle={{ textTransform: "capitalize" }}
    activeColor={colors.Primary.primaryGreen}
    inactiveColor={colors.Primary.black}
  />
);

export const Chow = ({
  onPress,
  chowHeader,
  descriptionText,
  nutritionText,
  imageURL,
}) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "description",
      title: "Description",
    },
    { key: "nutrition", title: "Nutrition facts" },
  ]);

  const renderScene = SceneMap({
    description: () => <ChowBody chowText={descriptionText} />,
    nutrition: () => <ChowBody chowText={nutritionText} />,
  });

  return (
    <View style={{ backgroundColor: colors.Primary.primaryWhite, flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Image
          source={{
            uri: imageURL,
          }}
          style={{
            width: "100%",
            position: "absolute",
            height: "110%",
          }}
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.header}>
          <Text
            style={{ fontWeight: "600", fontSize: 24, fontFamily: "SemiBold" }}
          >
            {chowHeader}
          </Text>
          <LikeButton height={31} width={31} />
        </View>
        <TabView
          renderTabBar={renderTabBar}
          renderScene={renderScene}
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
        />
      </View>
      <View style={styles.footerContainer}>
        <CustomButton
          buttonText="Nah! Find something else."
          onPress={onPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "white",
    flex: 1.6,
    padding: 10,
  },
  footerContainer: {
    height: 92,
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    paddingHorizontal: 25,
    justifyContent: "center",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowRadius: 7.5,
    elevation: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 22,
    paddingTop: 31,
    paddingBottom: 35,
  },
});
