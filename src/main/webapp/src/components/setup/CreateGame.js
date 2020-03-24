// @flow
import React from 'react'

import type { Action } from 'redux'
import { createGame } from '../../redux/action'

import { GameMode } from '../../domain/GameMode.type'
import type { GameModeType } from '../../domain/GameMode.type'

import updateFoundation from '../../foundation/updateFoundation'

type createGameProps = {
  dispatch: (action: Action) => void,
}

type createGameState = {
  name: string,
  gameMode: GameModeType,
  errors: {
    name: string,
  },
}

export class CreateGame extends React.Component<
  createGameProps,
  createGameState
> {
  constructor(props: createGameProps) {
    super(props)

    this.state = {
      name: '',
      gameMode: GameMode.FUEFER,
      errors: {
        name: '',
      },
    }
  }

  componentDidMount() {
    updateFoundation('.tabs')
    updateFoundation('.tabs-content')
  }

  setGameMode(gameMode: GameModeType) {
    this.setState({ gameMode })
  }

  handleChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event: SyntheticInputEvent<HTMLButtonElement>) => {
    event.preventDefault()

    if (!this.state.name || this.state.name.length < 1) {
      this.setState({
        errors: { name: 'Das isch ke Name fürnes Spiel!' },
      })
      return
    }

    const { dispatch } = this.props

    this.setState({ errors: { name: '' } }, () => {
      const { name, gameMode } = this.state
      dispatch(createGame(name, gameMode))
    })
  }

  render() {
    return (
      <div id="create-game">
        <form>
          <div className="grid-container ">
            <div className="grid-x grid-margin-x">
              <div className="cell medium-offset-2 medium-8">
                <label>
                  Gib dem Game no e name und los geets:
                  <input
                    type="text"
                    name="name"
                    placeholder="Ifallsriiche Name hie.."
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </label>
                {!!this.state.errors.name ? (
                  <p className="help-text error-text">
                    {this.state.errors.name}
                  </p>
                ) : null}
              </div>
              <div className="cell auto"></div>

              <div className="cell medium-offset-2 medium-8">
                <label>
                  Spielmodus ned vergesse. Zum Glück si die Cheibe agschribe:
                  <ul className="tabs" data-tabs id="game-mode-tabs">
                    <li className="tabs-title is-active">
                      <a
                        href="#5-er"
                        aria-selected="true"
                        onClick={() => this.setGameMode(GameMode.FUEFER)}
                      >
                        5er Bus
                      </a>
                    </li>
                    <li className="tabs-title">
                      <a
                        data-tabs-target="dr-gstaplet"
                        href="#dr-gstaplet"
                        onClick={() => this.setGameMode(GameMode.DRGSTAPLET)}
                      >
                        Dr Gstaplet
                      </a>
                    </li>
                  </ul>
                  <div
                    className="tabs-content"
                    data-tabs-content="game-mode-tabs"
                  >
                    <div className="tabs-panel is-active" id="5-er">
                      <p>
                        Bim 5er Bus ligge 5 Charte offe und du muesch der Reihe
                        nah sege öb höcher oder tööfer. Das isch e fiine, wedes
                        falsch hesch muesch hie oh ned vo vore afange! Sobald
                        alli 5 eenisch atroffe hesch bisch erlöst.
                      </p>
                    </div>
                    <div className="tabs-panel" id="dr-gstaplet">
                      <p>
                        Dr Gstaplet isch e herte cheib. Ohni ds wüsse was scho
                        ligt muesch du vom Stapel für ee Charte nach der andere
                        sege öbsi höcher oder töfer isch. Es wird so lang gsoffe
                        bis de Stapel fertig gmacht isch.
                      </p>
                    </div>
                  </div>
                </label>
              </div>
              <div className="cell auto"></div>

              <div className="cell medium-offset-8 medium-2 grid-y">
                <input
                  type="submit"
                  className="button"
                  value="Mal afange bitte."
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

export default CreateGame
