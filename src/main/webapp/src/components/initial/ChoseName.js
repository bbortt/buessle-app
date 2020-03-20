// @flow
import React from 'react'

import { connect } from 'react-redux'
import { setUsername } from '../../redux/action'
import { Action } from 'redux'

require('./chose-name.scss')

type choseNameProps = {
  dispatch: Action => any,
}

type choseNameState = {
  username: string,
  errors: {
    username: string,
  },
}

class ChoseName extends React.Component<choseNameProps, choseNameState> {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      errors: {
        username: '',
      },
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()

    if (!this.state.username || this.state.username.length < 1) {
      this.setState({
        errors: { username: 'Bitte wähl doch e aständige Name, goppff!' },
      })
      return
    }

    this.setState({ errors: { username: '' } }, () =>
      this.props.dispatch(setUsername(this.state.username))
    )
  }

  render() {
    return (
      <div id="chose-name">
        <h1>Rundi Büsslä Giele??</h1>

        <br />

        <form>
          <div className="grid-container ">
            <div className="grid-x grid-margin-x">
              <div className="cell medium-offset-2 medium-8">
                <label>
                  Wähl e passende Name für di:
                  <input
                    type="text"
                    name="username"
                    placeholder="Mi Name.."
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                </label>
                {!!this.state.errors.username ? (
                  <p className="help-text error-text">
                    {this.state.errors.username}
                  </p>
                ) : null}
              </div>
              <div className="cell auto"></div>

              <div className="cell medium-offset-8 medium-2 grid-y">
                <input
                  type="submit"
                  className="button"
                  value="Suuffe etz!!"
                  onClick={this.handleSubmit}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default connect()(ChoseName)
