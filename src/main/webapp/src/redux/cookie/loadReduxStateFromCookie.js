// @flow
import Cookies from 'universal-cookie'

import type { ReduxState } from '../reducer'

import { REDUX_COOKIE_NAME } from './const'

const cookies = new Cookies()

export const loadReduxStateFromCookie = (): ReduxState | null => {
  if (typeof window !== 'undefined') {
    return cookies.get(REDUX_COOKIE_NAME)
  }

  return null
}
