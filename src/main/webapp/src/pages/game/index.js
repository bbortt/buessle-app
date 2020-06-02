// @flow
import React from 'react'

import { Action } from 'redux'
import { connect } from 'react-redux'

import withValidGameOnly from '../../components/security/withValidGameOnly'
import type { ReduxState } from '../../redux/reducer'

type gameProps = {
  dispatch: (action: Action) => void,
}

export class Game extends React.Component<gameProps> {
  render() {
    return (
      <div id="game">
        <h1>Leggoo</h1>
      </div>
    )
  }
}

const mapStateToProps = (state: ReduxState) => {
  return {}
}

export default connect(mapStateToProps)(withValidGameOnly(Game))
