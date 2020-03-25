// @flow
export const CONNECT_SOCKET: string = 'Socket: Connect'
export const SOCKET_EVENT: string = 'Socket: Event'
export const DISCONNECT_SOCKET: string = 'Socket: Disconnect'

export type ConnectSocketAction = {
  type: string,
}

// TODO: Might not be required when dispatching into redux
export type SocketEventAction = {
  type: string,
  payload: any,
}

export type DisconnectSocketAction = {
  type: string,
}

export type SocketAction =
  | ConnectSocketAction
  | SocketEventAction
  | DisconnectSocketAction

export const connectSocket = () => {
  return { type: CONNECT_SOCKET }
}

export const disconnectSocket = () => {
  return { type: DISCONNECT_SOCKET }
}
