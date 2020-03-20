// @flow
import { applyMiddleware, createStore, Store } from 'redux'

import {
  crashReportingMiddleware,
  loggingMiddleware,
  reduxCookieMiddleware,
} from './middleware'
import type { MiddlewareType } from './middleware'

import type { ReduxState } from './reducer'
import rootReducer, { reduxState } from './reducer'

import { loadReduxStateFromCookie } from './cookie'

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

const configureStore = (
  initialState: ReduxState = loadReduxStateFromCookie() || reduxState
): Store<ReduxState> =>
  createStore(
    rootReducer,
    initialState,
    bindMiddleware([reduxCookieMiddleware])
  )

let store = null

export default (): Store<ReduxState> => {
  if (!store) {
    store = configureStore()
  }

  return store
}
