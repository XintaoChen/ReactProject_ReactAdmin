/**
 * a function modules that send ajax request
 * return a promise
 */
import axios from "axios";
import { message } from "antd";

axios.defaults.withCredentials = true;

const BASE_URL = "http://localhost:3000/api";

export default function ajax(url, data = {}, type = "GET") {
  return new Promise((resolve) => {
    let promise;
    if (type === "GET") {
      promise = axios.get(BASE_URL + url, {
        params: data,
      });
    } else if (type === "POST") {
      promise = axios.post(BASE_URL + url, data);
    }
    promise
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        message.error(err.message);
      });
  });
}

// login interface
