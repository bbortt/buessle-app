// @flow
import getStore from '../getStore'

import type { SagaIterator } from 'redux-saga'
import { all, spawn, takeEvery, takeLatest } from 'redux-saga/effects'

import type {
  ConnectSocketAction,
  DisconnectSocketAction,
  RequestInitialPlayersAction,
  StartGameAction,
} from '../action'
import {
  CONNECT_SOCKET,
  DISCONNECT_SOCKET,
  REQUEST_INITIAL_PLAYERS,
  socketError,
  START_GAME,
} from '../action'

import { getSocket } from '../socket'

type SocketSagaAction = StartGameAction

function* sendOverSocket(socketSaga: SocketSagaAction) {
  getSocket().send(JSON.stringify(socketSaga))
}

function* sendOverSocketSaga() {
  while (getSocket().readyState === WebSocket.OPEN) {
    yield takeEvery([START_GAME], sendOverSocket)
  }
}

function* connectSocket(connectSocketAction: ConnectSocketAction) {
  const socket = getSocket()

  socket.addEventListener('error', (event: Event) => {
    getStore().dispatch(socketError(event))
  })

  socket.addEventListener('message', (event: MessageEvent) => {
    const { topic, payload } = (event.data: any)
    getStore().dispatch({ type: topic, payload })
  })

  yield spawn(sendOverSocketSaga)
}

function* connectSocketSaga(): SagaIterator {
  yield takeLatest(CONNECT_SOCKET, connectSocket)
}

function disconnectSocket(disconnectSocketAction: DisconnectSocketAction) {
  getSocket().close()
}

function* disconnectSocketSaga(): SagaIterator {
  yield takeLatest(DISCONNECT_SOCKET, disconnectSocket)
}

function requestInitialPlayers(
  requestInitialPlayersAction: RequestInitialPlayersAction
): SagaIterator {
  getSocket().send(JSON.stringify({ type: REQUEST_INITIAL_PLAYERS }))
}

function* requestInitialPlayersSaga(): SagaIterator {
  yield takeLatest(REQUEST_INITIAL_PLAYERS, requestInitialPlayers)
}

export default function* socketSaga(): SagaIterator {
  yield all([
    connectSocketSaga(),
    disconnectSocketSaga(),
    requestInitialPlayersSaga(),
  ])
}
