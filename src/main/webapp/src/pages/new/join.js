// @flow
import React from 'react'

import { connect } from 'react-redux'
import type { Action } from 'redux'
import { validateRoom } from '../../redux/action'
import type { ReduxState } from '../../redux/reducer'

import withUsernameOnly from '../../components/security/withUsernameOnly'

import JoinGame from '../../components/setup/JoinGame'

type joinProps = {
  dispatch: (Action) => void,
  username: string,
  uuid: string,
  validateRoomError: string,
}

const Join = (props: joinProps) => {
  const { dispatch, uuid, username, validateRoomError } = props

  if (!!uuid && typeof window !== 'undefined') {
    dispatch(validateRoom(uuid, username))
  }

  return (
    <div id="new-join">
      <h1>diner Kollege (weller?) warte sicher..</h1>

      <br />

      <JoinGame
        dispatch={dispatch}
        uuid={uuid}
        validateRoomError={validateRoomError}
      />
    </div>
  )
}

const mapStateToProps = (state: ReduxState) => {
  const { uuid, validateError } = state.room
  const { username } = state.session

  return {
    username,
    uuid,
    validateRoomError: validateError,
  }
}

export default connect(mapStateToProps)(withUsernameOnly(Join))
