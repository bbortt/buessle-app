// @flow
import React from 'react'
import type { ComponentType } from 'react'

import Cookies from 'universal-cookie';

import { connect } from 'react-redux'

type contextProps = {
  children: ComponentType<any>[],
  cookies: Cookies,
  allCookies: any,
}

// TODO: Maybe better use https://www.npmjs.com/package/next-cookies
export class CookiesReduxContext extends React.Component<contextProps> {
  render() {
    if (typeof window !== 'undefined'){
      const cookies = new Cookies();
      console.log('cookies: ', cookies.getAll())
    }

    const {children} = this.props

    return <div id="cookies-redux-context">{children}</div>
  }
}

export default connect()(CookiesReduxContext)
