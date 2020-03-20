// @flow
import React from 'react'
import type { ComponentType } from 'react'

require('./_app.scss')

export const RootClass = ({
  Component,
  pageProps,
}: {
  Component: ComponentType<any>,
  pageProps: any,
}) => {
  return <Component {...pageProps} />
}

export default RootClass
