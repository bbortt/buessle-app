// @flow
import type { Action } from 'redux';
import { combineEpics } from 'redux-observable';

import { createLobbyEpic, joinLobbyEpic } from './lobby.epic';
import { initializePlayerEpic } from './player.epic';

const epics = [createLobbyEpic, initializePlayerEpic, joinLobbyEpic];

export default (combineEpics(...epics): Action<any>[]);
