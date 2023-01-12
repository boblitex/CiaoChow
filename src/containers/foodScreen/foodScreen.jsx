import { CustomButton } from "components/CustomButton";
import { SlideDots } from "components/SlideDots";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";
import { colors } from "src/theme/colors";
import { Description } from "./Description";
import { Nutrition } from "./Nutrition";
import LikeButton from "assets/images/heart.svg";

const renderScene = SceneMap({
  description: Description,
  nutrition: Nutrition,
});
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

export const FoodScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "description",
      title: "Description",
    },
    { key: "nutrition", title: "Nutrition facts" },
  ]);

  return (
    <View style={{ backgroundColor: colors.Primary.primaryWhite, flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Image
          source={require("assets/images/carrot.png")}
          style={{ width: "100%", position: "absolute" }}
        />
        <View style={{ position: "absolute", bottom: 0, alignSelf: "center" }}>
          <SlideDots color={"white"} />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.header}>
          <Text
            style={{ fontWeight: "600", fontSize: 24, fontFamily: "SemiBold" }}
          >
            Fresh Carrot
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
        <CustomButton buttonText="Nah! Find something else." />
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
