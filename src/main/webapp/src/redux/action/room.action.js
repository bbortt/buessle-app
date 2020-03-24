// @flow
export const JOIN_ROOM: string = 'Room: Join'

export type JoinRoomAction = {
  type: string,
  uuid: string,
}

export type RoomAction = JoinRoomAction

export const joinRoom = (uuid: string) => {
  return { type: JOIN_ROOM, uuid }
}
