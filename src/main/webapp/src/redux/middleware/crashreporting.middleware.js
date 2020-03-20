// @flow
import { Action, Store } from 'redux'
import type { ReduxState } from '../reducer'

export default (store: Store<ReduxState>) => (
  next: (action: Action) => ReduxState
) => (action: Action) => {
  try {
    return next(action)
  } catch (error) {
    console.error('Exception caught: ', error)
    throw error
  }
}
