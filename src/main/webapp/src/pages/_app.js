// @flow
import React from 'react'

import { Provider } from 'react-redux'
import getStore from '../redux/getStore'

import App from 'next/app'

import updateFoundation from '../foundation/updateFoundation'

import CookieConsent from '../components/cookies/CookieConsent'

require('./_app.scss')

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
