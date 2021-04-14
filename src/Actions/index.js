import gflix from "../Api";
import { LOGIN_SUCCESS, LOGIN_FAIL } from "./types";

export const login = (userName, password) => async (dispatch) => {
  try {
    const { data } = await gflix.post("users/login", {
      userName,
      password,
    });

    document.cookie = data.sessionID;
    return dispatch({ type: LOGIN_SUCCESS, data });
  } catch (e) {
    document.cookie = "";
    const error = e.response.data;
    debugger;
    return dispatch({ type: LOGIN_FAIL, error });
  }
};
