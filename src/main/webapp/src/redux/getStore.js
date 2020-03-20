// @flow
import { applyMiddleware, createStore, Store } from 'redux'

import { crashReportingMiddleware, loggingMiddleware } from './middleware'

import type { ReduxState } from './reducer'
import rootReducer, { reduxState } from './reducer'

const bindMiddleware = (middleware = []) => {
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
  initialState: ReduxState = reduxState
): Store<ReduxState> => createStore(rootReducer, initialState, bindMiddleware())

let store = null

export default (): Store<ReduxState> => {
  if (!store) {
    store = configureStore()
  }

  return store
}
