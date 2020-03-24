// @flow
import React from 'react'

import type { Action } from 'redux'
import { connect } from 'react-redux'

import withUsernameOnly from '../../components/security/withUsernameOnly'

import JoinGame from '../../components/setup/JoinGame'

type joinProps = {
  dispatch: Action => void,
}

const Join = (props: joinProps) => {
  const { dispatch } = props

  return (
    <div id="new-join">
      <h1>heia gib ihm</h1>

      <br />

      <JoinGame dispatch={dispatch} />
    </div>
  )
}

export default connect()(withUsernameOnly(Join))
