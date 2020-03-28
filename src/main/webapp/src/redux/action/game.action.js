// @flow
import type { GameModeType } from '../../domain/GameMode.type'

export const CREATE_GAME: string = 'Game: Create'

export type CreateGameAction = {
  type: string,
  name: string,
  gameMode: GameModeType,
}

export type GameAction = CreateGameAction

export const createGame = (
  name: string,
  gameMode: GameModeType
): CreateGameAction => {
  return { type: CREATE_GAME, name, gameMode }
}
