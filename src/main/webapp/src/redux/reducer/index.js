import { combineReducers } from "redux";

import { connectRouter } from "connected-react-router";

import helloReducer from "./hello.reducer";

export default (history) => {
  return combineReducers({
    router: connectRouter(history),
    hello: helloReducer,
  });
};
