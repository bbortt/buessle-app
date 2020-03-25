// @flow
import io from 'socket.io-client'

import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export type Socket = {
  open: () => void,
  on: (eventName: string, callback: (...any) => void) => void,
  close: () => void,
}

const createSocket = () => {
  const { backendUrl } = publicRuntimeConfig
  return io(backendUrl, { autoConnect: false })
}

let socket

export const getSocket = (): Socket => {
  if (!socket) {
    socket = createSocket()
  }

  return socket
}
