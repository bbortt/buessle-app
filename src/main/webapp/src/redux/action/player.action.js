// @flow
import type { Action } from 'redux';

import type { LobbyCreateAction, LobbyJoinAction } from './lobby.setup.action';

export const PLAYER_INITIALIZE = 'player:initialize';
export const PLAYER_INITIALIZE_SUCCEED = 'player:initialize-succeed';
export const PLAYER_INITIALIZE_FAILED = 'player:initialize-failed';

export type PlayerInitializeAction = Action<string> & {
  payload: { name: string, callback: LobbyCreateAction | LobbyJoinAction },
};

export type PlayerInitializeSucceedAction = Action<string> & {
  payload: { name: string },
};

export type PlayerInitializeFailedAction = Action<string> & {
  payload: any,
};

export type PlayerAction =
  | PlayerInitializeAction
  | PlayerInitializeSucceedAction
  | PlayerInitializeFailedAction;

export const initializePlayer = (
  name: string,
  callback: LobbyCreateAction | LobbyJoinAction
): PlayerInitializeAction => ({
  type: PLAYER_INITIALIZE,
  payload: { name, callback },
});

export const initializePlayerSucceed = (
  name: string
): PlayerInitializeSucceedAction => ({
  type: PLAYER_INITIALIZE_SUCCEED,
  payload: { name },
});

export const initializePlayerFailed = (
  errorMessage: any
): PlayerInitializeFailedAction => ({
  type: PLAYER_INITIALIZE_FAILED,
  payload: errorMessage,
});
