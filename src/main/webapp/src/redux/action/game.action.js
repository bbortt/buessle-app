// @flow
import type { GameMode } from '../../domain/GameMode.type'

export const CREATE_GAME: string = 'Game: Create'
export const START_GAME: string = 'Game: Start'

export type CreateGameAction = {
  type: string,
  name: string,
  gameMode: GameMode,
}

export type StartGameAction = {
  type: string,
}

export type GameAction = CreateGameAction | StartGameAction

export const createGame = (
  name: string,
  gameMode: GameMode
): CreateGameAction => {
  return { type: CREATE_GAME, name, gameMode }
}

export const startGame = (): StartGameAction => {
  return { type: START_GAME }
}
