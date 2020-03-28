// @flow
import type { SessionAction, SetUsernameAction } from '../action'
import { SET_USERNAME } from '../action'

export type SessionState = {
  +username: string,
}

export const initialSessionState: SessionState = {
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
    default:
      return state
  }
}
