// @flow
import type { Action } from 'redux';
import { combineEpics } from 'redux-observable';

import { createLobbyEpic } from './lobby.epic';

const epics = [createLobbyEpic];

export default (combineEpics(...epics): Action<any>[]);
