// @flow
import React from 'react'

import type { Player } from '../../../domain/Player.type'

type playerInformationProps = {
  userId: number,
  players: Player[],
}

export const PlayerInformation = (props: playerInformationProps) => {
  const { userId, players } = props

  return (
    <table className="unstriped text-left">
      <thead>
        <tr>
          <td>Mitspieler</td>
        </tr>
      </thead>
      <tbody>
        {players.map((player: Player) => (
          <tr key={`player-${player.id}-name`}>
            <td>
              {player.name}
              {player.id === userId ? ' (ig)' : ''}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default PlayerInformation
