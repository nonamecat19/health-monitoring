import axios from "axios";
import {BASE_URL} from "../config/api";

export const apiRequest = axios.create({
  baseURL: BASE_URL
})