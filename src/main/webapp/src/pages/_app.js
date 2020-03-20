// @flow
import React from 'react'
import type { ComponentType } from 'react'

import { CookiesProvider } from 'react-cookie'
import { CookiesReduxContext } from '../cookies/CookiesReduxContext'

import { Provider } from 'react-redux'
import getStore from '../redux/getStore'

require('./_app.scss')

export const RootClass = ({
  Component,
  pageProps,
}: {
  Component: ComponentType<any>,
  pageProps: any,
}) => {
  return (
    <div id="root" className="container">
      <CookiesProvider>
        <Provider store={getStore()}>
          <CookiesReduxContext>
            <Component {...pageProps} />
          </CookiesReduxContext>
        </Provider>
      </CookiesProvider>
    </div>
  )
}

export default RootClass
