// @flow
import type { GameMode } from '../../domain/GameMode.type'

export const CREATE_GAME: string = 'Game: Create'

export type CreateGameAction = {
  type: string,
  name: string,
  gameMode: GameMode,
}

export type GameAction = CreateGameAction

export const createGame = (
  name: string,
  gameMode: GameMode
): CreateGameAction => {
  return { type: CREATE_GAME, name, gameMode }
}
