// @flow
import getStore from '../getStore'

export const printState = () => {
  return getStore().getState()
}
