// @flow
import { applyMiddleware, createStore, Store } from 'redux'

import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'

import {
  crashReportingMiddleware,
  loggingMiddleware,
  reduxCookieMiddleware,
} from './middleware'
import type { MiddlewareType } from './middleware'

import type { ReduxState } from './reducer'
import rootReducer, { reduxState } from './reducer'

import { loadReduxStateFromCookie } from './cookie'

import merge from 'lodash/merge'

const bindMiddleware = (middleware: MiddlewareType[]) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(
      applyMiddleware(
        crashReportingMiddleware,
        loggingMiddleware,
        ...middleware
      )
    )
  }

  return applyMiddleware(...middleware)
}

const sagaMiddleware = createSagaMiddleware()

const configureStore = (
  initialState: ReduxState = merge(reduxState, loadReduxStateFromCookie())
): Store<ReduxState> =>
  createStore(
    rootReducer,
    initialState,
    bindMiddleware([reduxCookieMiddleware, sagaMiddleware])
  )

let store = null

export default (): Store<ReduxState> => {
  if (!store) {
    store = configureStore()

    if (typeof window !== 'undefined') {
      sagaMiddleware.run(rootSaga)
    }
  }

  return store
}
