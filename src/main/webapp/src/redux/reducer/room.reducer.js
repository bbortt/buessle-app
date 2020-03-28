// @flow
import type {
  JoinRoomAction,
  RoomAction,
  ValidateRoomAction,
  ValidateRoomFailedAction,
} from '../action/room.action'
import {
  JOIN_ROOM,
  VALIDATE_ROOM,
  VALIDATE_ROOM_FAILED,
} from '../action/room.action'

export type RoomState = {
  +uuid: string,
  +name: string,
  +isOwner: boolean,
  +validated: boolean,
  +validateError: string,
}

export const initialRoomState: RoomState = {
  uuid: '',
  name: '',
  isOwner: false,
  validated: false,
  validateError: '',
}

export default (
  state: RoomState = initialRoomState,
  action: RoomAction
): RoomState => {
  switch (action.type) {
    case VALIDATE_ROOM:
      const validateRoomAction = ((action: any): ValidateRoomAction)

      return {
        ...state,
        validated: false,
      }
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
        name: joinRoomAction.name,
        isOwner: joinRoomAction.isOwner,
        validated: true,
      }
    default:
      return state
  }
}
