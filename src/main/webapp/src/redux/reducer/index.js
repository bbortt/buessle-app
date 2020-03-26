// @flow
import { combineReducers } from 'redux'

import type { SessionState } from './session.reducer'
import sessionReducer, { initialSessionState } from './session.reducer'

import type { RoomState } from './room.reducer'
import roomReducer, { initialRoomState } from './room.reducer'

export type ReduxState = {
  +session: SessionState,
  +room: RoomState,
}

export const reduxState: ReduxState = {
  session: initialSessionState,
  room: initialRoomState,
}

export default combineReducers({
  session: sessionReducer,
  room: roomReducer,
})
