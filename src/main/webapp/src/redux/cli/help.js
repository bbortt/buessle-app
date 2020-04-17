// @flow
import { dispatch, listActions, printState } from './'

export const help = () => {
  return [dispatch, listActions, printState]
}
