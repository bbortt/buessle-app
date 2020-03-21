// @flow
import React from 'react'
import type { ComponentType } from 'react'

import getStore from '../../redux/getStore'

import Router from 'next/router'

export const withUsernameOnly = (WrappedComponent: ComponentType<any>) => {
  // TODO: Read state from url or cookies at this point

  return class WithUsernameOnly extends React.Component<any> {
    render() {
      const { username } = getStore().getState().session

      if (!username) {
        if (typeof window !== 'undefined') {
          Router.push('/')
        }

        // TODO: Maybe a real loading animation?
        return <div>Loading..</div>
      }

      return <WrappedComponent {...this.props} />
    }
  }
}

export default withUsernameOnly
