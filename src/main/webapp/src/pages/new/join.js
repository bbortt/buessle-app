// @flow
import React from 'react'

import { connect } from 'react-redux'

import withUsernameOnly from '../../components/security/withUsernameOnly'

const Join = () => (
  <div id="new-join">
    <h1>heia gib ihm</h1>
  </div>
)

export default connect()(withUsernameOnly(Join))
