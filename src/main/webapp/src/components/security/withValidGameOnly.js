// @flow
import React from 'react'
import type { ComponentType } from 'react'

import getStore from '../../redux/getStore'
import { validateRoom } from '../../redux/action'

import Router from 'next/router'
import type { ReduxState } from '../../redux/reducer'

export const withValidGameOnly = (WrappedComponent: ComponentType<any>) => {
  return class WithValidGameOnly extends React.Component<any> {
    render() {
      const reduxState: ReduxState = getStore().getState()
      const { uuid, validated } = reduxState.room
      const { username } = reduxState.session

      if (!uuid) {
        if (typeof window !== 'undefined') {
          Router.push('/new/join')
        }

        // TODO: Maybe a real loading animation?
        return <div>Loading..</div>
      }

      if (!validated) {
        getStore().dispatch(validateRoom(uuid, username))
      }

      return <WrappedComponent {...this.props} />
    }
  }
}

export default withValidGameOnly
