import AsyncStorage from "@react-native-async-storage/async-storage";

export const fetchJwt = async () => {
  const token = await AsyncStorage.getItem("jwt");
  return token;
};
