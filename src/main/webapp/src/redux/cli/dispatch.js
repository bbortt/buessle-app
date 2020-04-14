// @flow
import type { Action } from 'redux'
import getStore from '../getStore'

import { AVAILABLE_REDUX_ACTIONS } from './listActions'

export const dispatch = (action: Action) => {
  if (!action.type || AVAILABLE_REDUX_ACTIONS.indexOf(action.type) === -1) {
    throw 'This action type is not dispatchable!'
  }

  getStore().dispatch(action)

  return 'Done.'
}
