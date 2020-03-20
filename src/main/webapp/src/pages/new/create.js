// @flow
import React from 'react'

import { connect } from 'react-redux'

import withUsernameOnly from '../../components/security/withUsernameOnly'

const Create = () => <h1>de mach mal!</h1>

export default connect()(withUsernameOnly(Create))
