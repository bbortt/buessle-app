// @flow
import React from 'react'

import { connect } from 'react-redux'

import withUsernameOnly from '../../components/security/withUsernameOnly'

const Join = () => <h1>heia gib ihm</h1>

export default connect()(withUsernameOnly(Join))
