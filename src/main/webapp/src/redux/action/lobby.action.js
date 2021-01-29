// @flow
export const LOBBY_CREATE = 'lobby:create';
export const LOBBY_CREATE_FAILED = 'lobby:create-failed';
export const LOBBY_JOIN = 'lobby:join';
export const LOBBY_JOIN_FAILED = 'lobby:join-failed';

export type LobbyCreateAction = {
  type: string,
  payload: { name: string },
};

export type LobbyCreateFailedAction = { type: string, payload: string };

export type LobbyJoinAction = {
  type: string,
  payload: { uuid: string },
};

export type LobbyJoinFailedAction = {
  type: string,
  payload: { name: string, errorMessage: string },
};

export const createLobby = (name: string): LobbyCreateAction => ({
  type: LOBBY_CREATE,
  payload: { name },
});
export const createLobbyFailed = (
  errorMessage: string
): LobbyCreateFailedAction => ({
  type: LOBBY_CREATE_FAILED,
  payload: errorMessage,
});
export const joinLobby = (uuid: string): LobbyJoinAction => ({
  type: LOBBY_JOIN,
  payload: { uuid },
});
export const joinLobbyFailed = (
  name: string,
  errorMessage: string
): LobbyJoinFailedAction => ({
  type: LOBBY_JOIN_FAILED,
  payload: { name, errorMessage },
});
