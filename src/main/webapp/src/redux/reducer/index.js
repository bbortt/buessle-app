// @flow
import { combineReducers } from 'redux'

import type { SessionState } from './session.reducer'
import sessionReducer, { initialSessionState } from './session.reducer'

export type ReduxState = {
  +session: SessionState,
}

export const reduxState: ReduxState = {
  session: initialSessionState,
}

export default combineReducers({
  session: sessionReducer,
})
