import gflix from "../Api";
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  SIGNUP_EMAIL,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
} from "./types";

export const login = (userName, password) => async (dispatch) => {
  try {
    const { data } = await gflix.post("users/login", {
      userName,
      password,
    });

    localStorage.setItem("x-SessionID", data.sessionID);
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

export const logout = (sessionID) => async (dispatch) => {
  try {
    await gflix.get(`users/logout/${sessionID}`);
    localStorage.removeItem("x-SessionID");
    return dispatch({ type: LOGOUT_SUCCESS });
  } catch (e) {
    console.log(e.response.data);
  }
};

export const getTryMail = (email) => {
  return { type: SIGNUP_EMAIL, email };
};
