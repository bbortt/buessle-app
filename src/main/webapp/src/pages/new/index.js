// @flow
import React from 'react'

import { Action } from 'redux'
import { connect } from 'react-redux'
import type { ReduxState } from '../../redux/reducer'

import withUsernameOnly from '../../components/security/withUsernameOnly'

import Router from 'next/router'

import SelectGame from '../../components/setup/SelectGame'

type newProps = {
  dispatch: Action => any,
  username: string,
}

const New = (props: newProps) => (
  <div id="new">
    <SelectGame
      dispatch={props.dispatch}
      onJoinGame={() => Router.push('/new/join')}
      onCreateGame={() => Router.push('/new/create')}
      username={props.username}
    />
  </div>
)

const mapStateToProps = (state: ReduxState) => {
  return { username: state.session.username }
}

export default connect(mapStateToProps)(withUsernameOnly(New))
