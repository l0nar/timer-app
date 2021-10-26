import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import timerReducer from "./timerReducer";
import tasksReducer from "./tasksReducer";

const store = createStore(
  combineReducers({ timerReducer, tasksReducer }),
  composeWithDevTools()
);

export default store;
