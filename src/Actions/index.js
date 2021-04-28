import gflix from "../Api";
import axios from "axios";
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  SIGNUP_EMAIL,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  PROFILE_PICK_SUCCESS,
  PROFILE_CHANGE_SUCCESS,
  GET_ALL_CONTENT_SUCCESS,
  GET_CONTENT_SUCCESS,
} from "./types";

export const login = (userName, password) => async (dispatch) => {
  try {
    const { data } = await gflix.post("users/login", {
      userName,
      password,
    });
    //creating axios header
    gflix.defaults.headers["x-SessionID"] = data.sessionID;
    localStorage.setItem("x-SessionID", data.sessionID);
    localStorage.setItem("username", data.userName);

    return dispatch({ type: LOGIN_SUCCESS, data });
  } catch (e) {
    const error = e.response.data;
    return dispatch({ type: LOGIN_FAIL, error });
  }
};

export const signup = (
  userName,
  email,
  passwordHash,
  passwordRepeatHash
) => async (dispatch) => {
  try {
    await gflix.post("/users/reg", {
      userName,
      email,
      passwordHash,
      passwordRepeatHash,
    });
    return dispatch({ type: SIGNUP_SUCCESS });
  } catch (e) {
    const error = e.response.data;
    return dispatch({ type: SIGNUP_FAIL, error });
  }
};

export const logout = () => async (dispatch) => {
  const sessionID = localStorage.getItem("x-SessionID");
  try {
    await gflix.get(`users/logout/${sessionID}`);
    localStorage.removeItem("x-SessionID");
    localStorage.removeItem("username");
    localStorage.removeItem("pickedProfile");
    return dispatch({ type: LOGOUT_SUCCESS });
  } catch (e) {
    localStorage.removeItem("x-SessionID");
    localStorage.removeItem("username");
    localStorage.removeItem("pickedProfile");
  }
};

export const getTryMail = (email) => {
  return { type: SIGNUP_EMAIL, email };
};

export const pickProfile = (pickedProfile) => {
  try {
    localStorage.setItem("pickedProfile", pickedProfile);

    return { type: PROFILE_PICK_SUCCESS, pickedProfile };
  } catch (e) {
    debugger;
  }
};

export const changeProfile = () => {
  try {
    localStorage.removeItem("pickedProfile");
    return { type: PROFILE_CHANGE_SUCCESS };
  } catch (e) {
    console.log(e);
  }
};

export const getAllContent = () => async (dispatch) => {
  try {
    const { data } = await gflix.post("/content/get-all", {
      headers: { "x-SessionID": localStorage.getItem("x-SessionID") },
    });

    return dispatch({ type: GET_ALL_CONTENT_SUCCESS, data });
  } catch (e) {
    console.log(e);
  }
};

// export const getContent = (ID) => async (dispatch) => {
//   try {
//     const { data } = await gflix.post(`/content/get-by-id/${ID}`, {
//       headers: { "x-SessionID": localStorage.getItem("x-SessionID") },
//     });
//
//     debugger;
//     return dispatch({ type: GET_CONTENT_SUCCESS, data });
//   } catch (e) {
//     debugger;
//     console.log(e);
//   }
// };
