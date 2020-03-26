// @flow
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

const createSocket = () => {
  const { socketUrl } = publicRuntimeConfig
  return new WebSocket(`${socketUrl}/sockets`)
}

let socket

export const getSocket = (): WebSocket => {
  if (!socket) {
    socket = createSocket()
  }

  return socket
}
