// @flow
import React from 'react'

import { setUsername } from '../../redux/action'
import { Action } from 'redux'

type selectNameProps = {
  dispatch: Action => any,
  onUsernameEntered: () => void,
}

type selectNameState = {
  username: string,
  errors: {
    username: string,
  },
}

class SelectName extends React.Component<selectNameProps, selectNameState> {
  constructor(props: selectNameProps) {
    super(props)

    this.state = {
      username: '',
      errors: {
        username: '',
      },
    }
  }

  handleChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event: SyntheticInputEvent<HTMLButtonElement>) => {
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

    this.props.onUsernameEntered()
  }

  render() {
    return (
      <div id="select-name">
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

export default SelectName
