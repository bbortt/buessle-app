// @flow
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const { socketUrl } = publicRuntimeConfig

let socket: WebSocket

export const getSocket = (): WebSocket => {
  if (!socket) {
    socket = new WebSocket(`${socketUrl}/sockets`)
  }

  return socket
}
