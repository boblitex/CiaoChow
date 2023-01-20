import { fetchJwt } from "utils/authHelper/fetchJwt";

const { instance } = require("utils/axiosConfig");

export const fetchChow = async () => {
  try {
    const jwt = await fetchJwt();
    const token = `Bearer ${jwt}`;
    return await instance.get("/chows?populate=*", {
      headers: {
        Authorization: token,
      },
    });
  } catch (error) {
    console.error(error.response.data);
  }
};
