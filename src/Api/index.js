import axios from "axios";

const gflixApi = axios.create({
  baseURL: "https://gflixapi.atlast.ge",
  headers: {
    "Content-Type": "application/json",
    "x-SessionID": localStorage.getItem("x-SessionID"),
  },
  maxBodyLength: 2000,
});

export default gflixApi;
