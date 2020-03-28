// @flow
import type { SagaIterator } from 'redux-saga'
import { all, call, put, takeLatest } from 'redux-saga/effects'

import type { JoinRoomAction, ValidateRoomAction } from '../action'
import {
  JOIN_ROOM,
  VALIDATE_ROOM,
  joinRoom as joinRoomFromAction,
  validateRoomFailed,
  connectSocket,
  requestInitialPlayers,
} from '../action'

import Router from 'next/router'
import getConfig from 'next/config'

import axios from 'axios'

const { publicRuntimeConfig } = getConfig()

function* validateRoom(validateRoomAction: ValidateRoomAction) {
  const { uuid } = validateRoomAction

  const { apiUrl } = publicRuntimeConfig
  try {
    const response = yield call(axios.post, `${apiUrl}/api/validate`, {
      uuid,
    })
    const { name, isOwner } = response.data
    yield put(joinRoomFromAction(uuid, name, isOwner))
  } catch (error) {
    // TODO: Receive error code from backend
    yield put(validateRoomFailed(uuid))
  }
}

function* validateRoomSaga(): SagaIterator {
  yield takeLatest(VALIDATE_ROOM, validateRoom)
}

function* joinRoom(joinRoomAction: JoinRoomAction) {
  yield call(Router.push, '/new/wait')
  yield put(connectSocket())
  yield put(requestInitialPlayers())
}

function* joinRoomSaga(): SagaIterator {
  yield takeLatest(JOIN_ROOM, joinRoom)
}

export default function* roomSaga(): SagaIterator {
  yield all([validateRoomSaga(), joinRoomSaga()])
}
