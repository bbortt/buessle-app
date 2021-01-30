// @flow
export const PLAYER_INITIALIZE = 'player:initialize';
export const PLAYER_INITIALIZE_SUCCEED = 'player:initialize-succeed';
export const PLAYER_INITIALIZE_FAILED = 'player:initialize-failed';

export type PlayerInitializeAction = {
  type: string,
  payload: { name: string },
};

export type PlayerInitializeSucceedAction = {
  type: string,
  payload: { name: string },
};

export type PlayerInitializeFailedAction = {
  type: string,
  payload: string,
};

export type PlayerAction =
  | PlayerInitializeAction
  | PlayerInitializeSucceedAction
  | PlayerInitializeFailedAction;

export const initializePlayer = (name: string): PlayerInitializeAction => ({
  type: PLAYER_INITIALIZE,
  payload: { name },
});

export const initializePlayerSucceed = (
  name: string
): PlayerInitializeSucceedAction => ({
  type: PLAYER_INITIALIZE_SUCCEED,
  payload: { name },
});

export const initializePlayerFailed = (
  errorMessage: string
): PlayerInitializeFailedAction => ({
  type: PLAYER_INITIALIZE_FAILED,
  payload: errorMessage,
});
