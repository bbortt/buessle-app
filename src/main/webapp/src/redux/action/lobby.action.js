// @flow
export const LOBBY_CREATE = 'lobby:create';
export const LOBBY_CREATE_FAILED = 'lobby:create-failed';
export const LOBBY_JOIN = 'lobby:join';
export const LOBBY_JOIN_SUCCEED = 'lobby:join-succeed';
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

export type LobbyJoinSucceedAction = {
  type: string,
  payload: { uuid: string, name: string },
};

export type LobbyJoinFailedAction = {
  type: string,
  payload: string,
};

export type LobbyAction =
  | LobbyCreateAction
  | LobbyCreateFailedAction
  | LobbyJoinAction
  | LobbyJoinSucceedAction
  | LobbyJoinFailedAction;

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

export const joinLobbySucceed = (
  uuid: string,
  name: string
): LobbyJoinSucceedAction => ({
  type: LOBBY_JOIN_SUCCEED,
  payload: { uuid, name },
});

export const joinLobbyFailed = (
  errorMessage: string
): LobbyJoinFailedAction => ({
  type: LOBBY_JOIN_FAILED,
  payload: errorMessage,
});
