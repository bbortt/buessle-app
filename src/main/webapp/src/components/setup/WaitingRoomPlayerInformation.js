// @flow
import React from 'React'

import type { Player } from '../../domain/Player.type'

type playerInformationProps = {
  username: string,
  players: Player[],
}

export const WaitingRoomPlayerInformation = (props: playerInformationProps) => {
  const { username, players } = props

  return (
    <table className="unstriped text-left">
      <thead>
        <tr>
          <td>Mitspieler</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{username} (ig)</td>
        </tr>
        {players.forEach((player: Player) => (
          <tr>
            <td>{player.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default WaitingRoomPlayerInformation
