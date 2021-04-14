import { combineReducers } from "redux";
import { LOGIN_FAIL, LOGIN_SUCCESS } from "../Actions/types";

const initUser = {
  loggedIn: !!document.cookie,
  username: null,
};

const userReducer = (state = initUser, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      debugger;
      return { ...state, loggedIn: true, username: action.data.userName };
    case LOGIN_FAIL:
      return { ...state, errors: [action.error] };
    default:
      return state;
  }
};

export default combineReducers({
  user: userReducer,
});
