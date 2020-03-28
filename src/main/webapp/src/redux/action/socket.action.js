// @flow
export const CONNECT_SOCKET: string = 'Socket: Connect'
export const SOCKET_ERROR: string = 'Socket: Error'
export const DISCONNECT_SOCKET: string = 'Socket: Disconnect'

export type ConnectSocketAction = {
  type: string,
}

export type SocketErrorAction = {
  type: string,
  errorType: string,
}

export type DisconnectSocketAction = {
  type: string,
}

export type SocketAction =
  | ConnectSocketAction
  | SocketErrorAction
  | DisconnectSocketAction

export const connectSocket = () => {
  return { type: CONNECT_SOCKET }
}

export const socketError = (event: Event) => {
  return { type: SOCKET_ERROR, errorType: event.type }
}

export const disconnectSocket = () => {
  return { type: DISCONNECT_SOCKET }
}
