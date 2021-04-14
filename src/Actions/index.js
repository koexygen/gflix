import gflix from "../Api";
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS } from "./types";

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

export const logout = (sessionID) => async (dispatch) => {
  try {
    await gflix.get(`users/logout/${sessionID}`);
    localStorage.removeItem("x-SessionID");
    return dispatch({ type: LOGOUT_SUCCESS });
  } catch (e) {
    debugger;
  }
};
