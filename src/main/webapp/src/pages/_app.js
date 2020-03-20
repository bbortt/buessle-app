// @flow
import React from 'react'
import type { ComponentType } from 'react'

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
        <Provider store={getStore()}>
          <CookiesReduxContext>
            <Component {...pageProps} />
          </CookiesReduxContext>
        </Provider>
    </div>
  )
}

export default RootClass
