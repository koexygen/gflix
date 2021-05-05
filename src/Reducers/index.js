import { combineReducers } from "redux";
import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  PROFILE_PICK_SUCCESS,
  SIGNUP_EMAIL,
  SIGNUP_FAIL,
  PROFILE_CHANGE_SUCCESS,
  GET_ALL_CONTENT_SUCCESS,
  GET_CONTENT_SUCCESS,
  GET_WATCHLIST_SUCCESS,
  REMOVE_WATCHLIST_SUCCESS,
  ADD_WATCHLIST_SUCCESS,
} from "../Actions/types";

const initUser = {
  loggedIn: localStorage.getItem("x-SessionID") !== (null && "undefined"),
  username: localStorage.getItem("username"),
  pickedProfile: localStorage.getItem("pickedProfile"),
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
        loggedIn: localStorage.getItem("x-SessionID") !== null && "undefined",
        username: null,
        pickedProfile: null,
      };
    case SIGNUP_EMAIL:
      return { ...state, tryMail: action.email };
    case SIGNUP_FAIL:
      return { ...state, errors: [action.error] };
    case PROFILE_PICK_SUCCESS:
      return { ...state, pickedProfile: action.pickedProfile };
    case PROFILE_CHANGE_SUCCESS:
      return { ...state, pickedProfile: null };

    default:
      return state;
  }
};

const contentReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_CONTENT_SUCCESS:
      return { ...state, allContent: action.data };
    case GET_CONTENT_SUCCESS:
      return { ...state, singles: action.data };
    case GET_WATCHLIST_SUCCESS:
      return { ...state, watchlist: action.data };
    case REMOVE_WATCHLIST_SUCCESS:
      return { ...state, watchlist: action.data };
    case ADD_WATCHLIST_SUCCESS:
      return { ...state, watchlist: action.data };
    default:
      return state;
  }
};

export default combineReducers({
  user: userReducer,
  content: contentReducer,
});
