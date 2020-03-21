// @flow
import React from 'react'

import { connect } from 'react-redux'

import withUsernameOnly from '../../components/security/withUsernameOnly'

import type { GameModeType } from '../../domain/GameMode.type'

import CreateGame from '../../components/setup/CreateGame'

const loadGame = (name: string, gameMode: GameModeType) => {
  console.log('load game named: ', name, ', with type: ', gameMode)
}

const Create = () => (
  <div id="new-create">
    <CreateGame loadGame={loadGame} />
  </div>
)

export default connect()(withUsernameOnly(Create))
