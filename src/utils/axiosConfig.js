import axios from "axios";
import { fetchJwt } from "./authHelper/fetchJwt";
const baseURL = process.env.BASE_URL;

export const instance = axios.create({
  baseURL,
});
fetchJwt()
  .then((token) => (axios.defaults.headers.common["Authorization"] = token))
  .catch((e) => console.error(e));
