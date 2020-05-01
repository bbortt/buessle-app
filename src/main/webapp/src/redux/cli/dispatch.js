// @flow
import type { Action } from 'redux'
import getStore from '../getStore'

import { ADD_PLAYER } from '../action'

const AVAILABLE_REDUX_ACTION_TYPES = [ADD_PLAYER]

export const dispatch = (action: Action) => {
  if (
    !action.type ||
    AVAILABLE_REDUX_ACTION_TYPES.indexOf(action.type) === -1
  ) {
    throw 'This action type is not dispatchable!'
  }

  getStore().dispatch(action)

  return 'Done.'
}
