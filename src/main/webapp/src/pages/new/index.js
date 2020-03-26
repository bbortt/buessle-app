// @flow
import React from 'react'

import { connect } from 'react-redux'
import type { Action } from 'redux'
import type { ReduxState } from '../../redux/reducer'

import withUsernameOnly from '../../components/security/withUsernameOnly'

import Router from 'next/router'

import SelectGame from '../../components/setup/SelectGame'

type newProps = {
  dispatch: Action => any,
  username: string,
}

const New = (props: newProps) => {
  const { username } = props

  return (
    <div id="new">
      <h1>Auso "{username}", seg was wosch..</h1>

      <br />

      <SelectGame
        dispatch={props.dispatch}
        onJoinGame={() => Router.push('/new/join')}
        onCreateGame={() => Router.push('/new/create')}
      />
    </div>
  )
}

const mapStateToProps = (state: ReduxState) => {
  return { username: state.session.username }
}

export default connect(mapStateToProps)(withUsernameOnly(New))
