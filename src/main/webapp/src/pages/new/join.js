// @flow
import React from 'react'

import type { Action } from 'redux'
import { connect } from 'react-redux'
import type { ReduxState } from '../../redux/reducer'

import withUsernameOnly from '../../components/security/withUsernameOnly'

import JoinGame from '../../components/setup/JoinGame'

type joinProps = {
  dispatch: Action => void,
  validateRoomError: string,
}

const Join = (props: joinProps) => {
  const { dispatch, validateRoomError } = props

  return (
    <div id="new-join">
      <h1>diner Kollege (weller?) warte sicher..</h1>

      <br />

      <JoinGame dispatch={dispatch} validateRoomError={validateRoomError} />
    </div>
  )
}

const mapStateToProps = (state: ReduxState) => {
  return { validateRoomError: state.room.validateError }
}

export default connect(mapStateToProps)(withUsernameOnly(Join))
