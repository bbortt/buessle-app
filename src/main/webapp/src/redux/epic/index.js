// @flow
import type { Action } from 'redux';
import { combineEpics } from 'redux-observable';

import { connectLobbyEpic } from './lobby.epic';
import { createLobbyEpic, joinLobbyEpic } from './lobby.setup.epic';
import { initializePlayerEpic } from './player.epic';

const epics = [
  connectLobbyEpic,
  createLobbyEpic,
  initializePlayerEpic,
  joinLobbyEpic,
];

export default (combineEpics(...epics): Action<any>[]);
