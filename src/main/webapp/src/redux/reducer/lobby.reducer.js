// @flow
import type {
  LobbyAction,
  LobbyJoinSucceedAction,
} from '../action/lobby.action';
import { LOBBY_JOIN_SUCCEED } from '../action/lobby.action';

export type LobbyState = {
  uuid: string,
  name: string,
};

const initialLobbyState = {
  uuid: '',
  name: '',
};

export default (
  state: LobbyState = initialLobbyState,
  action: LobbyAction
): LobbyState => {
  switch (action.type) {
    case LOBBY_JOIN_SUCCEED:
      const { uuid, name } = ((action: any): LobbyJoinSucceedAction).payload;
      return {
        ...state,
        uuid,
        name,
      };
    default:
      return state;
  }
};
