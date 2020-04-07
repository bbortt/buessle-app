// @flow
export const VALIDATE_ROOM: string = 'Room: Validate'
export const VALIDATE_ROOM_FAILED: string = 'Room: Validate failed'
export const JOIN_ROOM: string = 'Room: Join'
export const REQUEST_INITIAL_PLAYERS = 'Room: Request initial players'
export const ADD_PLAYER = 'Room: Add player'

export type ValidateRoomAction = {
  type: string,
  uuid: string,
  username: string,
}

export type ValidateRoomFailedAction = {
  type: string,
  uuid: string,
}

export type JoinRoomAction = {
  type: string,
  uuid: string,
  name: string,
  userId: number,
}

export type RequestInitialPlayersAction = {
  type: string,
}

export type AddPlayerAction = {
  type: string,
  id: number,
  name: string,
}

export type RoomAction =
  | ValidateRoomAction
  | ValidateRoomFailedAction
  | JoinRoomAction
  | RequestInitialPlayersAction
  | AddPlayerAction

export const validateRoom = (
  uuid: string,
  username: string
): ValidateRoomAction => {
  return { type: VALIDATE_ROOM, uuid, username }
}

export const validateRoomFailed = (uuid: string): ValidateRoomFailedAction => {
  return { type: VALIDATE_ROOM_FAILED, uuid }
}

export const joinRoom = (
  uuid: string,
  name: string,
  userId: number
): JoinRoomAction => {
  return { type: JOIN_ROOM, uuid, name, userId }
}

export const requestInitialPlayers = (): RequestInitialPlayersAction => {
  return { type: REQUEST_INITIAL_PLAYERS }
}

export const addPlayer = (id: number, name: string): AddPlayerAction => {
  return { type: ADD_PLAYER, id, name }
}
