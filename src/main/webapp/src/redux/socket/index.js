// @flow
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export type Socket = {
  close: () => void,
}

const createSocket = () => {
  const { socketUrl } = publicRuntimeConfig
  return new WebSocket(`${socketUrl}/sockets`)
}

let socket

export const getSocket = (): Socket => {
  if (!socket) {
    socket = createSocket()
  }

  return socket
}
