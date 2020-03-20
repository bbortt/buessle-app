// @flow
import React from 'react'

import { Action } from 'redux'
import { connect } from 'react-redux'

import Router from 'next/router'

import SelectName from '../components/select/SelectName'
import type { ReduxState } from '../redux/reducer'

type homeProps = {
  dispatch: Action => any,
  username: string,
}

const nextPage = () => Router.push('/new')

const Home = (props: homeProps) => {
  if (!!props.username && typeof window !== 'undefined') {
    nextPage()
    return null
  }

  return (
    <SelectName
      dispatch={props.dispatch}
      onUsernameEntered={() => nextPage()}
    />
  )
}

const mapStateToProps = (state: ReduxState) => {
  return { username: state.session.username }
}

export default connect(mapStateToProps)(Home)
