// @flow
import React from 'react'

import { connect } from 'react-redux'
import type { Action } from 'redux'
import type { ReduxState } from '../../redux/reducer'

import withValidGameOnly from '../../components/security/withValidGameOnly'

type waitProps = {
  dispatch: Action => void,
  uuid: string,
}

const Wait = (props: waitProps) => {
  const { dispatch, uuid } = props

  return (
    <div id="new-join">
      <h1>mal warte hie bitte</h1>
    </div>
  )
}

const mapStateToProps = (state: ReduxState) => {
  return { uuid: state.room.uuid }
}

export default connect(mapStateToProps)(withValidGameOnly(Wait))
