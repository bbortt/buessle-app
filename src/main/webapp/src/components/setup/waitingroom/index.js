// @flow
import React from 'react'

import type { Action } from 'redux'
import { startGame as startGameFromAction } from '../../../redux/action'

import type { Player } from '../../../domain/Player.type'

import PlayerInformation from './PlayerInformation'

const startGame = (dispatch: (Action) => void) => () => {
  dispatch(startGameFromAction())
}

type waitingRoomProps = {
  dispatch: (Action) => void,
  userId: number,
  players: Player[],
  validated: boolean,
}

export const WaitingRoom = (props: waitingRoomProps) => {
  const { dispatch, userId, players, validated } = props

  return (
    <div id="wait-for-game">
      <div className="grid-container fluid">
        <div className="grid-x grid-margin-x">
          <div className="cell medium-offset-2 medium-4">
            <PlayerInformation userId={userId} players={players} />
          </div>
          <div className="cell medium-4">
            Game Informatione.. Die chöme no! (Je nach Spielmodus :)
          </div>
          <div className="cell medium-offset-8 medium-2 grid-y" />
          {validated && userId === 0 ? (
            <button
              type="button"
              className="button"
              onClick={startGame(dispatch)}
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

export default WaitingRoom
