// @flow
import type { Action } from 'redux';
import { combineEpics } from 'redux-observable';

import { createLobbyEpic } from './lobby.epic';
import { initializePlayerEpic } from './player.epic';

const epics = [createLobbyEpic, initializePlayerEpic];

export default (combineEpics(...epics): Action<any>[]);
