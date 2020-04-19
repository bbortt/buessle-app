// @flow
import type { SagaIterator } from 'redux-saga'
import { call, fork } from 'redux-saga/effects'

import gameSaga from './game.saga'
import roomSaga from './room.saga'
import sessionSaga from './session.saga'
import socketSaga from './socket.saga'

import { spawnFailsafeSagas } from './util'

const sagas = [gameSaga, roomSaga, sessionSaga, socketSaga]

export default function* (): SagaIterator {
  yield spawnFailsafeSagas(sagas)
}
