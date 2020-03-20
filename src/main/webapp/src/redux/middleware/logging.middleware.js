// @flow
import { Action, Store } from 'redux'
import type { ReduxState } from '../reducer'

export default (store: Store<ReduxState>) => (
  next: (action: Action) => ReduxState
) => (action: Action) => {
  console.log(`dispatching: ${action.type}`)
  const result = next(action)
  console.log(`next state: ${JSON.stringify(store.getState())}`)
  return result
}
