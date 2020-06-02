// @flow
import React from 'react'

import { connect } from 'react-redux'
import type { Action } from 'redux'
import type { ReduxState } from '../../redux/reducer'

import type { Player } from '../../domain/Player.type'

import withValidGameOnly from '../../components/security/withValidGameOnly'

import WaitingRoom from '../../components/setup/waitingroom'

type waitProps = {
  dispatch: (Action) => void,
  userId: number,
  roomName: string,
  players: Player[],
  validated: boolean,
}

const Wait = (props: waitProps) => {
  const { dispatch, userId, roomName, players, validated } = props

  return (
    <div id="new-wait">
      <h1>Rum "{roomName}"</h1>

      <br />

      <WaitingRoom
        dispatch={dispatch}
        players={players}
        userId={userId}
        validated={validated}
      />
    </div>
  )
}

const mapStateToProps = (state: ReduxState) => {
  const { name, players, validated } = state.room
  const { id } = state.session
  return { userId: id, roomName: name, players, validated }
}

export default connect(mapStateToProps)(withValidGameOnly(Wait))
