import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const $host = axios.create({
  baseURL: "http://campfire.ext-it.ru:4081/api/v1",
});

const $authHost = axios.create({
  baseURL: "http://campfire.ext-it.ru:4081/api/v1",
});

$authHost.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("access_token");
  if (config.headers) {
    config.headers.authorization = "Bearer " + token;
  }
  return config;
});

export { $host, $authHost };
