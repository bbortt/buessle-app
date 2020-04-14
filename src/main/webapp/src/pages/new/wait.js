// @flow
import React from 'react'

import { connect } from 'react-redux'
import type { Action } from 'redux'
import type { ReduxState } from '../../redux/reducer'

import type { Player } from '../../domain/Player.type'

import withValidGameOnly from '../../components/security/withValidGameOnly'
import WaitingRoomPlayerInformation from '../../components/setup/WaitingRoomPlayerInformation'

type waitProps = {
  dispatch: (Action) => void,
  userId: number,
  roomName: string,
  players: Player[],
  validated: boolean,
}

const startGame = () => {
  // TODO: send start game event via socket
}

const Wait = (props: waitProps) => {
  const { dispatch, userId, roomName, players, validated } = props

  return (
    <div id="new-join">
      <h1>Rum "{roomName}"</h1>

      <br />

      <div className="grid-container fluid">
        <div className="grid-x grid-margin-x">
          <div className="cell medium-offset-2 medium-4">
            <WaitingRoomPlayerInformation userId={userId} players={players} />
          </div>
          <div className="cell medium-4">
            Game Informatione.. Die chöme no! (Je nach Spielmodus :)
          </div>
          <div className="cell medium-offset-8 medium-2 grid-y"></div>
          {validated && userId === 0 ? (
            <button
              type="button"
              className="button"
              onClick={startGame}
              disabled={players.length <= 1}
            >
              Ds Spiel starte
            </button>
          ) : (
            <span>Mir warte no uf anderi Fucks..</span>
          )}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state: ReduxState) => {
  const { name, players, validated } = state.room
  const { id } = state.session
  return { userId: id, roomName: name, players, validated }
}

export default connect(mapStateToProps)(withValidGameOnly(Wait))
