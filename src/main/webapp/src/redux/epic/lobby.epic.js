// @flow
import type { Action } from 'redux';
import { ofType } from 'redux-observable';

import type { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { loader } from 'graphql.macro';
import { apolloClient } from '../../apollo-client';

import type {
  LobbyCreateAction,
  LobbyJoinAction,
  LobbyJoinFailedAction,
} from '../action/lobby.action';
import {
  joinLobby,
  joinLobbyFailed,
  LOBBY_CREATE,
} from '../action/lobby.action';

const createBoard = loader('../../graphql/mutation_create-board.graphql');
type CreateBoardResponse = { createBoard: { uuid: string } };

export const createLobbyEpic = (
  action: Observable<Action<LobbyCreateAction>>
): Observable<Action<LobbyJoinAction | LobbyJoinFailedAction>> =>
  action.pipe(
    ofType(LOBBY_CREATE),
    mergeMap((action: LobbyCreateAction) =>
      apolloClient
        .mutate({
          mutation: createBoard,
          variables: { name: action.payload.name },
        })
        .then((response: { data: CreateBoardResponse }) =>
          joinLobby(response.data.createBoard.uuid)
        )
        .catch((error: any) => joinLobbyFailed(action.payload.name, error))
    )
  );
