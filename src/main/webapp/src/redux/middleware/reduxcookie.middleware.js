// @flow
import Cookies from 'universal-cookie'

import { Action, Store } from 'redux'
import type { ReduxState } from '../reducer'

import { REDUX_COOKIE_NAME } from '../cookie'

const cookies = new Cookies()

export default (store: Store<ReduxState>) => (
  next: (action: Action) => ReduxState
) => (action: Action) => {
  const result = next(action)

  if (typeof window !== 'undefined') {
    cookies.set(REDUX_COOKIE_NAME, store.getState())
  }

  return result
}
