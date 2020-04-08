// @flow
import React from 'react'

import { connect } from 'react-redux'
import type { Action } from 'redux'
import { setUsername } from '../redux/action'
import type { ReduxState } from '../redux/reducer'

import SelectName from '../components/setup/SelectName'

type homeProps = {
  dispatch: (Action) => any,
  username: string,
}

const Home = (props: homeProps) => {
  const { dispatch, username } = props

  if (!!username && typeof window !== 'undefined') {
    dispatch(setUsername(username))
    return null
  }

  return (
    <div id="home">
      <h1>Rundi Büsslä Giele??</h1>

      <br />

      <SelectName dispatch={dispatch} />
    </div>
  )
}

const mapStateToProps = (state: ReduxState) => {
  return { username: state.session.username }
}

export default connect(mapStateToProps)(Home)
