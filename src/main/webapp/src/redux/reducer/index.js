// @flow
import type { Action, Reducer } from 'redux';
import { combineReducers } from 'redux';

import { connectRouter } from 'connected-react-router';

import type { LobbyState } from './lobby.reducer';
import type { PlayerState } from './player.reducer';

import lobbyReducer from './lobby.reducer';
import playerReducer from './player.reducer';

export type ApplicationState = {
  router: any,
  lobby: LobbyState,
  player: PlayerState,
};

export default (history: any): Reducer<ApplicationState, Action<any>> => {
  return combineReducers({
    router: connectRouter(history),
    lobby: lobbyReducer,
    player: playerReducer,
  });
};
