// @flow
import React from 'react'
import type { ComponentType } from 'react'

import { Cookies, withCookies } from 'react-cookie'

import { connect } from 'react-redux'

type contextProps = {
  children: ComponentType<any>[],
  cookies: Cookies,
  allCookies: any,
}

// TODO: Maybe better use https://www.npmjs.com/package/next-cookies
export class CookiesReduxContext extends React.Component<contextProps> {
  render() {
    const { children, cookies } = this.props

    console.log('cookies: ', cookies)

    return <div id="cookies-redux-context">{children}</div>
  }
}

export default withCookies(CookiesReduxContext)
