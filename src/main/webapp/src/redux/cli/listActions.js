// @flow
import { addPlayer } from '../action'

export const AVAILABLE_REDUX_ACTIONS = [addPlayer(0, '')]

export const listActions = () => {
  return AVAILABLE_REDUX_ACTIONS
}
