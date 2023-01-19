const { instance } = require("utils/axiosConfig");

const fetchChow = async () => {
  try {
    return await instance.get("/chows?populate=*");
  } catch (error) {
    console.error(error.response.data);
  }
};
