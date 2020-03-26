// @flow
import type { SagaIterator } from 'redux-saga'
import { all, call, takeLatest } from 'redux-saga/effects'

import type { SetUsernameAction } from '../action'
import { CREATE_GAME, SET_USERNAME } from '../action'

import Router from 'next/router'

function* setUsername(setUsernameAction: SetUsernameAction) {
  yield call(Router.push, '/new')
}

function* setUsernameSaga(): SagaIterator {
  yield takeLatest(SET_USERNAME, setUsername)
}

export default function* sessionSaga(): SagaIterator {
  yield all([setUsernameSaga()])
}
