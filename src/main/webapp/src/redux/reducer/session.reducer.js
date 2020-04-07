// @flow
import type {
  JoinRoomAction,
  SessionAction,
  SetUsernameAction,
} from '../action'
import { JOIN_ROOM, SET_USERNAME } from '../action'

export type SessionState = {
  +id: number,
  +username: string,
}

export const initialSessionState: SessionState = {
  id: 0,
  username: '',
}

export default (
  state: SessionState = initialSessionState,
  action: SessionAction
): SessionState => {
  switch (action.type) {
    case SET_USERNAME:
      const setUsernameAction = ((action: any): SetUsernameAction)

      return {
        ...state,
        username: setUsernameAction.username,
      }
    case JOIN_ROOM:
      const joinRoomAction = ((action: any): JoinRoomAction)

      return {
        ...state,
        id: joinRoomAction.userId,
      }
    default:
      return state
  }
}
