// @flow
import React from 'React'

type playerInformationProps = {
  username: string,
}

export const WaitingRoomPlayerInformation = (props: playerInformationProps) => {
  const { username } = props

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
      </tbody>
    </table>
  )
}

export default WaitingRoomPlayerInformation
