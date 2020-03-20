// @flow
import { Action, Store } from 'redux'
import type { ReduxState } from '../reducer'

export type MiddlewareType = (
  store: Store<ReduxState>
) => (next: (action: Action) => ReduxState) => (action: Action) => ReduxState
