// @flow
import type { SagaIterator } from 'redux-saga'
import { all, fork } from 'redux-saga/effects'

import gameSaga from './game.saga'
import roomSaga from './room.saga'
import sessionSaga from './session.saga'
import socketSaga from './socket.saga'

export default function* rootSaga(): SagaIterator {
  yield all([
    fork(gameSaga),
    fork(roomSaga),
    fork(sessionSaga),
    fork(socketSaga),
  ])
}
