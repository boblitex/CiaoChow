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

const registerHelper = async (username, email, password) => {
  try {
    return await instance.post("/auth/local/register", {
      username,
      email,
      password,
    });
  } catch (error) {
    console.error(error.response.data);
  }
};

export { loginHelper, registerHelper };
