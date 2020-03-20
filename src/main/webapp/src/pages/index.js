// @flow
import React from 'react'

import { Action } from 'redux'
import { connect } from 'react-redux'

import Router from 'next/router'

import SelectName from '../components/select/SelectName'

type homeProps = {
  dispatch: Action => any,
}

const Home = (props: homeProps) => (
  <SelectName
    dispatch={props.dispatch}
    onUsernameEntered={() => Router.push('/new')}
  />
)

export default connect()(Home)
