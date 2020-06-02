// @flow
import Cookies from 'universal-cookie'

import { Action, Store } from 'redux'
import type { ReduxState } from '../reducer'

import { REDUX_COOKIE_NAME } from '../cookie'

const cookies = new Cookies()

type cookieState = {
  session: {
    username: string,
  },
  room: {
    uuid: string,
  },
}

function prepareReduxStateForCookie(state: ReduxState): cookieState {
  return {
    session: {
      username: state.session.username,
    },
    room: {
      uuid: state.room.uuid,
    },
  }
}

export default (store: Store<ReduxState>) => (
  next: (action: Action) => ReduxState
) => (action: Action) => {
  const result = next(action)

  if (typeof window !== 'undefined') {
    cookies.set(
      REDUX_COOKIE_NAME,
      prepareReduxStateForCookie(store.getState()),
      { path: '/' }
    )
  }

  return result
}
