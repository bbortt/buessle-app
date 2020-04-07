// @flow
import React from 'react'

import type { Player } from '../../domain/Player.type'

type playerInformationProps = {
  userId: number,
  players: Player[],
}

export const WaitingRoomPlayerInformation = (props: playerInformationProps) => {
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
          <tr>
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

export default WaitingRoomPlayerInformation
