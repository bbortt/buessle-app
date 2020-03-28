// @flow
import React from 'react'
import type { ComponentType } from 'react'

import getStore from '../../redux/getStore'
import { validateRoom } from '../../redux/action'

import Router from 'next/router'

export const withValidGameOnly = (WrappedComponent: ComponentType<any>) => {
  return class WithValidGameOnly extends React.Component<any> {
    render() {
      const store = getStore()
      const { uuid, validated } = store.getState().room

      if (!uuid) {
        if (typeof window !== 'undefined') {
          Router.push('/new/join')
        }

        // TODO: Maybe a real loading animation?
        return <div>Loading..</div>
      }

      if (!validated) {
        store.dispatch(validateRoom(uuid))
      }

      return <WrappedComponent {...this.props} />
    }
  }
}

export default withValidGameOnly
