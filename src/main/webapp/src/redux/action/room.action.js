// @flow
export const VALIDATE_ROOM: string = 'Room: Validate'
export const VALIDATE_ROOM_FAILED: string = 'Room: Validate failed'
export const JOIN_ROOM: string = 'Room: Join'

export type ValidateRoomAction = {
  type: string,
  uuid: string,
}

export type ValidateRoomFailedAction = {
  type: string,
  uuid: string,
}

export type JoinRoomAction = {
  type: string,
  uuid: string,
  name: string,
  isOwner: boolean,
}

export type RoomAction =
  | ValidateRoomAction
  | ValidateRoomFailedAction
  | JoinRoomAction

export const validateRoom = (uuid: string): ValidateRoomAction => {
  return { type: VALIDATE_ROOM, uuid }
}

export const validateRoomFailed = (uuid: string): ValidateRoomFailedAction => {
  return { type: VALIDATE_ROOM_FAILED, uuid }
}

export const joinRoom = (
  uuid: string,
  name: string,
  isOwner: boolean
): JoinRoomAction => {
  return { type: JOIN_ROOM, uuid, name, isOwner }
}
