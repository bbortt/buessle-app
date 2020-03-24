// @flow
import React from 'react'

import { connect } from 'react-redux'
import type { Action } from 'redux'
import { createGame } from '../../redux/action'

import withUsernameOnly from '../../components/security/withUsernameOnly'

import type { GameModeType } from '../../domain/GameMode.type'

import CreateGame from '../../components/setup/CreateGame'

type createProps = {
  dispatch: Action => void,
}

export class Create extends React.Component<createProps> {
  loadGame = (name: string, gameMode: GameModeType) => {
    const { dispatch } = this.props
    dispatch(createGame(name, gameMode))
  }

  render() {
    return (
      <div id="new-create">
        <h1>*Startet neus Spiel*</h1>

        <br />

        <CreateGame loadGame={this.loadGame} />
      </div>
    )
  }
}

export default connect()(withUsernameOnly(Create))
