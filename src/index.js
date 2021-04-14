import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import reducers from "./Reducers";

const middleWares = [thunk, logger];
const store = createStore(reducers, applyMiddleware(...middleWares));

// document.addEventListener("DOMContentLoaded", () => {
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
// });
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
