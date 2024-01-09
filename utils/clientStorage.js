import CryptoJS from "crypto-js";
import { SECRET_KEY } from "./static";

export const SET_SESSION_STROAGE = (key, data) => {
  const serach = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    SECRET_KEY
  ).toString();
  sessionStorage.setItem(key, serach);
};

export const GET_SESSION_STROAGE = (key) => {
  if (typeof window !== "undefined") {
    const getSearch = sessionStorage.getItem(key);
    try {
      const data = CryptoJS.AES.decrypt(getSearch, SECRET_KEY).toString(
        CryptoJS.enc.Utf8
      );
      return JSON.parse(data);
    } catch (error) {
      console.log("error", error.message);
    }
  }
};
