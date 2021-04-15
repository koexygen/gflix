import { combineReducers } from "redux";
import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SIGNUP_EMAIL,
} from "../Actions/types";

const initUser = {
  loggedIn: !!localStorage.getItem("x-SessionID"),
  username: null,
};

const userReducer = (state = initUser, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, loggedIn: true, username: action.data.userName };
    case LOGIN_FAIL:
      return { ...state, errors: [action.error], loggedIn: false };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggedIn: !!localStorage.getItem("x-SessionID"),
        username: null,
      };
    case SIGNUP_EMAIL:
      return { ...state, tryMail: action.email };
    default:
      return state;
  }
};

export default combineReducers({
  user: userReducer,
});
