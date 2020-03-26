// @flow
import getStore from '../getStore'

import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export class Socket {
  +socket: WebSocket

  constructor() {
    const { socketUrl } = publicRuntimeConfig
    this.socket = new WebSocket(`${socketUrl}/sockets`)
  }

  open = () => {
    this.socket.onmessage = (event: MessageEvent) => {
      const { topic, payload } = (event.data: any)
      getStore().dispatch({ type: topic, payload })
    }
  }

  close = () => {
    this.socket.close()
  }
}

let socket: Socket

export const getSocket = (): Socket => {
  if (!socket) {
    socket = new Socket()
  }

  return socket
}
