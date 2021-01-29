// @flow
import type { Action, Reducer } from 'redux';
import { combineReducers } from 'redux';

import { connectRouter } from 'connected-react-router';

export type ApplicationState = {
  router: any,
};

export default (history: any): Reducer<ApplicationState, Action<any>> => {
  return combineReducers({
    router: connectRouter(history),
  });
};
