// @flow
export const SET_USERNAME: string = 'Session: Set username'

export type SetUsernameAction = {
  type: string,
  username: string,
}

export type SessionAction = SetUsernameAction

export const setUsername = (username: string) => {
  return { type: SET_USERNAME, username }
}
