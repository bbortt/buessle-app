// @flow
import type { JoinRoomAction, RoomAction } from '../action/room.action'
import { JOIN_ROOM } from '../action/room.action'

export type RoomState = {
  uuid: string,
}

export const initialRoomState: RoomState = {
  uuid: '',
}

export default (
  state: RoomState = initialRoomState,
  action: RoomAction
): RoomState => {
  switch (action.type) {
    case JOIN_ROOM:
      const joinRoomAction = ((action: any): JoinRoomAction)

      return {
        ...state,
        uuid: joinRoomAction.uuid,
      }
    default:
      return state
  }
}
