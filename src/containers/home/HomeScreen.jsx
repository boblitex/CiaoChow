import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { CustomButton } from "components/CustomButton";
import Logo from "assets/images/logo.svg";
import { Container } from "../container/container";
import Icon1 from "assets/images/icon1.svg";
import Icon2 from "assets/images/icon2.svg";
import { SlideDots } from "components/SlideDots";
import { colors } from "src/theme/colors";

export const HomeScreen = ({ navigation: { navigate } }) => {
  return (
    <Container background lowerBackgroundGreen>
      <View style={styles.header}>
        <Text style={styles.headerText}>CiaoChow</Text>
        <Logo />
      </View>
      <View style={styles.icons}>
        <Icon1 />
        <Icon2 />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Hungry? <Text style={{ fontWeight: "bold" }}>CiaoChow</Text> helps you
          {"\n"}find something to eat.
        </Text>
      </View>
      <View style={styles.buttonStyle}>
        <CustomButton
          buttonText="Get Started"
          onPress={() => navigate("register")}
          inverted
        />
      </View>
      <View style={styles.slideDots}>
        {Array(3)
          .fill("")
          .map((dot, index) => {
            const dotColor =
              index === 2 ? colors.Primary.primaryWhite : colors.Primary.gray4;
            return <SlideDots color={dotColor} key={`${dot}${index}`} />;
          })}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontFamily: "HeaderBold",
    fontWeight: "600",
    fontSize: "28",
    color: "white",
    margin: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70,
  },
  text: {
    color: "white",
    fontWeight: "400",
    fontSize: 18,
    lineHeight: 30,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
  buttonStyle: {
    marginVertical: 50,
    width: "100%",
    paddingHorizontal: 20,
  },
  slideDots: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
});
