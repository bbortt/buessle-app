// @flow
import React from 'react'

import { Provider } from 'react-redux'
import getStore from '../redux/getStore'

import App from 'next/app'

import updateFoundation from '../foundation/updateFoundation'

import CookieConsent from '../components/cookies/CookieConsent'

require('./_app.scss')

// Expose redux cli when developing
if (process.env.NODE_ENV !== 'production') {
  // $FlowFixMe
  require('expose-loader?reduxCli!../redux/cli')
}

export class RootClass extends App {
  componentDidMount() {
    updateFoundation()
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <div id="root" className="container">
        <CookieConsent />

        <Provider store={getStore()}>
          <Component {...pageProps} />
        </Provider>
      </div>
    )
  }
}

export default RootClass
