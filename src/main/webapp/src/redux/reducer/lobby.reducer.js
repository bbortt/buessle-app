// @flow
import type {
  LobbySetupAction,
  LobbyJoinSucceedAction,
} from '../action/lobby.setup.action';
import { LOBBY_JOIN_SUCCEED } from '../action/lobby.setup.action';
import { LOBBY_CONNECTED } from '../action/lobby.action';

export type LobbyState = {
  uuid: string,
  name: string,
  connected: boolean,
};

const initialLobbyState = {
  uuid: '',
  name: '',
  connected: false,
};

export default (
  state: LobbyState = initialLobbyState,
  action: LobbySetupAction
): LobbyState => {
  switch (action.type) {
    case LOBBY_JOIN_SUCCEED:
      const { uuid, name } = ((action: any): LobbyJoinSucceedAction).payload;
      return {
        ...state,
        uuid,
        name,
      };
    case LOBBY_CONNECTED:
      return {
        ...state,
        connected: true,
      };
    default:
      return state;
  }
};
