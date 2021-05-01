import axios from "axios";

const gflixApi = axios.create({
  baseURL: "https://gflixapi.atlast.ge",
  headers: {
    "Content-Type": "application/json",
    "x-SessionID": localStorage.getItem("x-SessionID"),
  },
  maxBodyLength: 2000,
});

export const getContent = async (ID) => {
  try {
    const { data } = await gflixApi.post(
      `/content/get-by-id`,
      JSON.stringify(ID)
    );
    return data;
  } catch (e) {
    console.log(e);
  }
};

export default gflixApi;
