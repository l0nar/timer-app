import { combineReducers, createStore } from "redux";
import timerReducer from "./timerReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  combineReducers({ timerReducer }, composeWithDevTools())
);

export default store;
