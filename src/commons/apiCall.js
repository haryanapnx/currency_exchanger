import axios from "axios";
import { URL } from "./config";
import { isEmpty } from "./helper";

const cors = "https://cors-anywhere.herokuapp.com/";

let contentType = {
  "Content-Type": "application/json"
  // "X-Requested-With": "XMLHttpRequest"
};

const defaultHeader = val => {
  if (val["Content-Type"] !== undefined) {
    return val;
  } else {
    return { ...val, ...contentType };
  }
};

export const apiCall = ({ method, url, data = "" }) => async dispatch => {
  let head = !isEmpty(data.headers) ? defaultHeader(data.headers) : contentType;
  try {
    const response = await axios({
      method: method,
      url: cors + URL + url,
      data: data.data || "",
      headers: head || "",
      params: data.params || "",
      timeout: data.timeout || 0
      // withCredentials: true
    });
    return response;
  } catch (error) {
    if (error.response) {
      const { data } = error.response;
      if (error.response.status !== 400) {
        if (data.status) {
          alert(data.detail);
        } else {
          alert(
            "Maaf sedang terjadi masalah dengan kami. Mohon tunggu beberapa menit lagi 🙏"
          );
        }
        return data;
      }
      return data;
    } else {
      alert(
        "Maaf sedang terjadi masalah dengan  kami. Mohon tunggu beberapa menit lagi 🙏"
      );
    }
    return null;
  }
};
