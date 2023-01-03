import { MainNavigation } from "./src/navigation/MainNavigation";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    Regular: require("./assets/fonts/Inter-Regular.ttf"),
    SemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    Bold: require("./assets/fonts/Inter-Bold.ttf"),
    Light: require("./assets/fonts/Inter-Light.ttf"),
    ExtraBold: require("./assets/fonts/Inter-ExtraBold.ttf"),
    HeaderBold: require("./assets/fonts/MontserratAlternates-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <MainNavigation />
    </>
  );
}
