// @flow
import type { SagaIterator } from 'redux-saga'
import { all, takeLatest } from 'redux-saga/effects'

import { CREATE_GAME } from '../action'
import type { CreateGameAction } from '../action'

function* createGame(createGameAction: CreateGameAction) {
  // TODO: Create game
  console.log('create game: ', createGameAction)
}

function* createGameSaga(): SagaIterator {
  yield takeLatest(CREATE_GAME, createGame)
}

export default function* gameSaga(): SagaIterator {
  yield all([createGameSaga()])
}
