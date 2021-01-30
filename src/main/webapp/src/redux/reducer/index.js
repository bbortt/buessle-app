// @flow
import type { Action, Reducer } from 'redux';
import { combineReducers } from 'redux';

import { connectRouter } from 'connected-react-router';

import playerReducer from './player.reducer';
import type { PlayerState } from './player.reducer';

export type ApplicationState = {
  router: any,
  player: PlayerState,
};

export default (history: any): Reducer<ApplicationState, Action<any>> => {
  return combineReducers({
    router: connectRouter(history),
    player: playerReducer,
  });
};
