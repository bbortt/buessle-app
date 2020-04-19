// @flow
import type { SagaIterator } from 'redux-saga'
import { all, call, spawn } from 'redux-saga/effects'

export function* spawnFailsafeSagas(sagas: SagaIterator[]) {
  yield all(
    sagas.map((saga: SagaIterator) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            // TODO: Propper error handling
            console.log(e)
          }
        }
      })
    )
  )
}
