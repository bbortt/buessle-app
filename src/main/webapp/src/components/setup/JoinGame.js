// @flow
import React from 'react'

import type { Action } from 'redux'
import { validateRoom } from '../../redux/action'

import { withRouter } from 'next/router'

type joinGameProps = {
  dispatch: (action: Action) => void,
  username: string,
  uuid: string,
  validateRoomError: string,
}

type joinGameState = {
  uuid: string,
  errors: {
    uuid: string,
  },
}

export class JoinGame extends React.Component<joinGameProps, joinGameState> {
  static getDerivedStateFromProps(props: joinGameProps, state: joinGameState) {
    if (!!props.validateRoomError) {
      return {
        ...state,
        errors: { uuid: 'Das Game gits ned. Überprüef bitte dini Igab!' },
      }
    }

    return { ...state, errors: { uuid: '' } }
  }

  constructor(props: joinGameProps) {
    super(props)

    this.state = {
      uuid: this.constructUuidIfExists(props),
      errors: {
        uuid: '',
      },
    }
  }

  constructUuidIfExists(props: joinGameProps) {
    let uuid

    if (typeof window !== 'undefined') {
      uuid = new URLSearchParams(window.location.search).get('uuid')
    }

    if (!!uuid) {
      uuid = props.uuid
    }

    return uuid || ''
  }

  handleChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event: SyntheticInputEvent<HTMLButtonElement>) => {
    event.preventDefault()

    if (!this.state.uuid || this.state.uuid.length < 1) {
      this.setState({
        errors: { uuid: 'Gimer doch e gültige Game-Schlüssel!' },
      })
      return
    }

    const { dispatch, username } = this.props

    this.setState({ errors: { uuid: '' } }, () => {
      const { uuid } = this.state
      dispatch(validateRoom(uuid, username))
    })
  }

  render() {
    return (
      <div id="join-game">
        <form>
          <div className="grid-container ">
            <div className="grid-x grid-margin-x">
              <div className="cell medium-offset-2 medium-8">
                <label>
                  Hesch de e Schlüssel für das Spiel?
                  <input
                    type="text"
                    name="uuid"
                    placeholder="407abe75-d9ba-420e-bd34-860c33285edf"
                    value={this.state.uuid}
                    onChange={this.handleChange}
                  />
                </label>
                {!!this.state.errors.uuid ? (
                  <p className="help-text error-text">
                    {this.state.errors.uuid}
                  </p>
                ) : null}
              </div>
              <div className="cell auto"></div>

              <div className="cell medium-offset-8 medium-2 grid-y">
                <input
                  type="submit"
                  className="button"
                  value="Ez wetti loslegge."
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

export default withRouter(JoinGame)
