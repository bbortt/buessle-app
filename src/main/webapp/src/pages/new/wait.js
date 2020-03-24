// @flow
import React from 'react'

import { connect } from 'react-redux'

import withUsernameOnly from '../../components/security/withUsernameOnly'

const Wait = () => (
  <div id="new-join">
    <h1>mal warte hie bitte</h1>
  </div>
)

export default connect()(withUsernameOnly(Wait))
