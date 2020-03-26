// @flow
import type { SagaIterator } from 'redux-saga'
import { all, takeLatest } from 'redux-saga/effects'

import type { ConnectSocketAction, DisconnectSocketAction } from '../action'
import { CONNECT_SOCKET, DISCONNECT_SOCKET } from '../action'

import { getSocket } from '../socket'

function* connectSocket(connectSocketAction: ConnectSocketAction) {
  getSocket()
}

function* connectSocketSaga(): SagaIterator {
  yield takeLatest(CONNECT_SOCKET, connectSocket)
}

function* disconnectSocket(disconnectSocketAction: DisconnectSocketAction) {
  getSocket().close()
}

function* disconnectSocketSaga(): SagaIterator {
  yield takeLatest(DISCONNECT_SOCKET, disconnectSocket)
}

export default function* socketSaga(): SagaIterator {
  yield all([connectSocketSaga(), disconnectSocketSaga()])
}
