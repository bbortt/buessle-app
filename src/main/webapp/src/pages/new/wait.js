// @flow
import React from 'react'

import { connect } from 'react-redux'
import type { Action } from 'redux'
import type { ReduxState } from '../../redux/reducer'

import withValidGameOnly from '../../components/security/withValidGameOnly'
import WaitingRoomPlayerInformation from '../../components/setup/WaitingRoomPlayerInformation'

type waitProps = {
  dispatch: Action => void,
  username: string,
  roomName: string,
  isOwner: boolean,
}

const startGame = () => {}

const Wait = (props: waitProps) => {
  const { dispatch, username, roomName, isOwner, players } = props

  return (
    <div id="new-join">
      <h1>Rum "{roomName}"</h1>

      <br />

      <div className="grid-container fluid">
        <div className="grid-x grid-margin-x">
          <div className="cell medium-offset-2 medium-4">
            <WaitingRoomPlayerInformation
              username={username}
              players={players}
            />
          </div>
          <div className="cell medium-4">
            Game Informatione.. Die chöme no! (Je nach Spielmodus :)
          </div>
          <div className="cell medium-offset-8 medium-2 grid-y"></div>
          {isOwner ? (
            <button type="button" className="button" onClick={startGame}>
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
  const { name, isOwner, players } = state.room
  return { username: state.session.username, roomName: name, isOwner, players }
}

export default connect(mapStateToProps)(withValidGameOnly(Wait))
