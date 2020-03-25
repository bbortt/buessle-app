// @flow
import React from 'react'

import type { Action } from 'redux'

type selectGameProps = {
  dispatch: Action => any,
  onJoinGame: () => void,
  onCreateGame: () => void,
}

export const SelectGame = (props: selectGameProps) => {
  const { onJoinGame, onCreateGame } = props

  return (
    <div id="select-game">
      <div className="grid-container ">
        <div className="grid-x grid-margin-x">
          <div className="cell medium-offset-2 medium-4 grid-y">
            <button type="button" className="button" onClick={onJoinGame}>
              Zu mine Kollege wotti!
            </button>
          </div>
          <div className="cell medium-4 grid-y">
            <button type="button" className="button" onClick={onCreateGame}>
              S neus Spiel starte, denk!
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectGame
