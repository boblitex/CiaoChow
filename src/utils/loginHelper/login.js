import { instance } from "../axiosConfig";

const loginHelper = async (email, password) => {
  try {
    return await instance.post("/auth/local", {
      identifier: email,
      password,
    });
  } catch (error) {
    console.error(error);
  }
};

export { loginHelper };
