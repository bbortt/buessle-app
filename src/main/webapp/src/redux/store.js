import { applyMiddleware, compose, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";
import thunk from "redux-thunk";

import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

import rootEpic from "./epic";
import createRootReducer from "./reducer";

import loggerMiddleware from "./middleware/logger.middleware";
import crashReporterMiddleware from "./middleware/crash-reporter.middleware";

const history = createBrowserHistory();
const epicMiddleware = createEpicMiddleware();

const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history), epicMiddleware];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }

  middleware.push(loggerMiddleware, crashReporterMiddleware);
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(
  createRootReducer(history),
  initialState,
  composedEnhancers
);

epicMiddleware.run(rootEpic);

export { history };
export default store;
