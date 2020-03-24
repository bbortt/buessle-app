// @flow
import React from 'react'

import { Action } from 'redux'
import { connect } from 'react-redux'
import type { ReduxState } from '../redux/reducer'

import Router from 'next/router'

import SelectName from '../components/setup/SelectName'

type homeProps = {
  dispatch: Action => any,
  username: string,
}

const nextPage = () => Router.push('/new')

const Home = (props: homeProps) => {
  const { dispatch, username } = props

  if (!!username && typeof window !== 'undefined') {
    nextPage()
    return null
  }

  return (
    <div id="home">
      <h1>Rundi Büsslä Giele??</h1>

      <br />

      <SelectName dispatch={dispatch} onUsernameEntered={() => nextPage()} />
    </div>
  )
}

const mapStateToProps = (state: ReduxState) => {
  return { username: state.session.username }
}

export default connect(mapStateToProps)(Home)
