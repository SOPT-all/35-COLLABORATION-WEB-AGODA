import axios from "axios";
import { BASE_URL } from "@utils/constants/api/api";

export const instance = axios.create({
  baseURL: BASE_URL,
});
