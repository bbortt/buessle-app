// @flow
import type {
  JoinRoomAction,
  RoomAction,
  ValidateRoomFailedAction,
} from '../action/room.action'
import { JOIN_ROOM, VALIDATE_ROOM_FAILED } from '../action/room.action'

export type RoomState = {
  uuid: string,
  validateError: string,
}

export const initialRoomState: RoomState = {
  uuid: '',
  validateError: '',
}

export default (
  state: RoomState = initialRoomState,
  action: RoomAction
): RoomState => {
  switch (action.type) {
    case VALIDATE_ROOM_FAILED:
      const validateRoomFailedAction = ((action: any): ValidateRoomFailedAction)

      return {
        ...state,
        uuid: validateRoomFailedAction.uuid,
        validateError: VALIDATE_ROOM_FAILED,
      }
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
