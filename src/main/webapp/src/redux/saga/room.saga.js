// @flow
import type { SagaIterator } from 'redux-saga'
import { all, call, takeLatest } from 'redux-saga/effects'

import type { CreateGameAction } from '../action'
import { JOIN_ROOM } from '../action'

import Router from 'next/router'

function* joinRoom(joinRoomAction: CreateGameAction) {
  yield call(Router.push, '/new/wait')
}

function* joinRoomSaga(): SagaIterator {
  yield takeLatest(JOIN_ROOM, joinRoom)
}

export default function* roomSaga(): SagaIterator {
  yield all([joinRoomSaga()])
}
