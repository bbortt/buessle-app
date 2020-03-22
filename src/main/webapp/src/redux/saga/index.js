// @flow
import type { SagaIterator } from 'redux-saga'
import { all, fork } from 'redux-saga/effects'

import gameSaga from './game.saga'

export default function* rootSaga(): SagaIterator {
  yield all([fork(gameSaga)])
}
