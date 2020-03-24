// @flow
import React from 'react'

import { connect } from 'react-redux'
import type { Action } from 'redux'

import withUsernameOnly from '../../components/security/withUsernameOnly'

import CreateGame from '../../components/setup/CreateGame'

type createProps = {
  dispatch: Action => void,
}

const Create = (props: createProps) => {
  const { dispatch } = this.props

  return (
    <div id="new-create">
      <h1>*Startet neus Spiel*</h1>

      <br />

      <CreateGame dispatch={dispatch} />
    </div>
  )
}

export default connect()(withUsernameOnly(Create))
