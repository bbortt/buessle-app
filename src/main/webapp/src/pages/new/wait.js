// @flow
import React from 'react'

import { connect } from 'react-redux'
import type { Action } from 'redux'
import type { ReduxState } from '../../redux/reducer'

import withValidGameOnly from '../../components/security/withValidGameOnly'

type waitProps = {
  dispatch: Action => void,
  name: string,
  isOwner: boolean,
}

const Wait = (props: waitProps) => {
  const { dispatch, name, isOwner } = props

  return (
    <div id="new-join">
      <h1>warte uf anderi spiler..</h1>
      <h2>
        <small>Rum "{name}"</small>
      </h2>
    </div>
  )
}

const mapStateToProps = (state: ReduxState) => {
  const { name, isOwner } = state.room
  return { name, isOwner }
}

export default connect(mapStateToProps)(withValidGameOnly(Wait))
