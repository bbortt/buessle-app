// @flow
import type {
  PlayerAction,
  PlayerInitializeSucceedAction,
} from '../action/player.action';
import {
  PLAYER_INITIALIZE,
  PLAYER_INITIALIZE_FAILED,
  PLAYER_INITIALIZE_SUCCEED,
} from '../action/player.action';

export type PlayerState = {
  name: string,
  initializing: boolean,
};

const initialPlayerState: PlayerState = {
  name: '',
  initializing: false,
};

export default (
  state: PlayerState = initialPlayerState,
  action: PlayerAction
): PlayerState => {
  switch (action.type) {
    case PLAYER_INITIALIZE:
      return {
        ...state,
        initializing: true,
      };
    case PLAYER_INITIALIZE_SUCCEED:
      const typedAction = ((action: any): PlayerInitializeSucceedAction);
      return {
        ...state,
        name: typedAction.payload.name,
        initializing: false,
      };
    case PLAYER_INITIALIZE_FAILED:
      return {
        ...state,
        initializing: false,
      };
    default:
      return state;
  }
};
