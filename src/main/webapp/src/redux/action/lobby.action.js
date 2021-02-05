// @flow
import type { Action } from 'redux';

export const LOBBY_CONNECT = 'Lobby:Connect';
export const LOBBY_CONNECTED = 'Lobby:Connected';

export type LobbyConnectAction = Action<string>;

export type LobbyConnectedAction = Action<string>;

export type LobbyAction = LobbyConnectAction | LobbyConnectedAction;

export const connectToLobby = (): LobbyConnectAction => ({
  type: LOBBY_CONNECT,
});

export const connectedToLobby = (): LobbyConnectedAction => ({
  type: LOBBY_CONNECTED,
});
