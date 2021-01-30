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
  LobbyJoinSucceedAction,
} from '../action/lobby.action';
import {
  createLobbyFailed,
  joinLobby,
  joinLobbyFailed,
  joinLobbySucceed,
  LOBBY_CREATE,
  LOBBY_JOIN,
} from '../action/lobby.action';

const createBoard = loader('../../graphql/mutation_create-board.graphql');
type CreateBoardResponse = { createBoard: { uuid: string } };

const joinBoard = loader('../../graphql/mutation_join-board.graphql');
type JoinBoardResponse = { joinBoard: { name: string } };

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
        .catch((error: any) => createLobbyFailed(error))
    )
  );

export const joinLobbyEpic = (
  action: Observable<Action<LobbyJoinAction>>
): Observable<Action<LobbyJoinSucceedAction | LobbyJoinFailedAction>> =>
  action.pipe(
    ofType(LOBBY_JOIN),
    mergeMap((action: LobbyJoinAction) =>
      apolloClient
        .mutate({
          mutation: joinBoard,
          variables: { uuid: action.payload.uuid },
        })
        .then((response: { data: JoinBoardResponse }) =>
          joinLobbySucceed(action.payload.uuid, response.data.joinBoard.name)
        )
        .catch((error: any) => joinLobbyFailed(error))
    )
  );
