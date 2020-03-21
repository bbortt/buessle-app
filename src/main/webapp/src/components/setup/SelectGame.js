// @flow
import React from 'react'

import { Action } from 'redux'

type selectGameProps = {
  dispatch: Action => any,
  onJoinGame: () => void,
  onCreateGame: () => void,
  username: string,
}

type selectGameState = {}

export class SelectGame extends React.Component<
  selectGameProps,
  selectGameState
> {
  constructor(props: selectGameProps) {
    super(props)

    this.state = {}
  }

  render() {
    const { onJoinGame, onCreateGame, username } = this.props

    return (
      <div id="select-game">
        <h1>Auso "{username}", seg was wosch..</h1>

        <br />

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
}

export default SelectGame
