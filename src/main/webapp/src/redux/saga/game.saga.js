// @flow
import type { SagaIterator } from 'redux-saga'
import { all, takeLatest } from 'redux-saga/effects'

import { CREATE_GAME } from '../action'
import type { CreateGameAction } from '../action'

import axios from 'axios'

import getStore from '../getStore'

import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

function* createGame(createGameAction: CreateGameAction) {
  const { username } = getStore().getState().session
  const { name, gameMode } = createGameAction
  const player = { name: username }

  const { backendUrl } = publicRuntimeConfig
  const response = yield axios.post(`${backendUrl}/api/new`, {})
  console.log('response: ', response)
}

function* createGameSaga(): SagaIterator {
  yield takeLatest(CREATE_GAME, createGame)
}

export default function* gameSaga(): SagaIterator {
  yield all([createGameSaga()])
}
