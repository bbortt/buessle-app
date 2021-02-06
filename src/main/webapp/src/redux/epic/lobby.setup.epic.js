// @flow
import type { Action } from 'redux';
import type { ActionsObservable } from 'redux-observable';
import { ofType } from 'redux-observable';
import { push } from 'connected-react-router';

import { from, of } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';

import { loader } from 'graphql.macro';
import { apolloClient } from '../../apollo-client';

import type {
  LobbyCreateAction,
  LobbyJoinAction,
  LobbyJoinFailedAction,
} from '../action/lobby.setup.action';
import {
  createLobbyFailed,
  joinLobby,
  joinLobbyFailed,
  joinLobbySucceed,
  LOBBY_CREATE,
  LOBBY_JOIN,
} from '../action/lobby.setup.action';

const createBoard = loader('../../graphql/mutation_create-board.graphql');
type CreateBoardResponse = { createBoard: { uuid: string } };

const joinBoard = loader('../../graphql/mutation_join-board.graphql');
type JoinBoardResponse = { joinBoard: { name: string } };

export const createLobbyEpic = (
  action: ActionsObservable<Action<LobbyCreateAction>>
): ActionsObservable<Action<LobbyJoinAction | LobbyJoinFailedAction>> =>
  action.pipe(
    ofType(LOBBY_CREATE),
    mergeMap((action: LobbyCreateAction) =>
      apolloClient
        .mutate({
          mutation: createBoard,
          variables: { name: action.payload.name },
        })
        .then(({ data }: { data: CreateBoardResponse }) =>
          joinLobby(data.createBoard.uuid)
        )
        .catch((error: any) => createLobbyFailed(error))
    )
  );

export const joinLobbyEpic = (
  action: ActionsObservable<Action<LobbyJoinAction>>
): ActionsObservable<Action<any>> =>
  action.pipe(
    ofType(LOBBY_JOIN),
    mergeMap((action: LobbyJoinAction) =>
      from(
        apolloClient.mutate({
          mutation: joinBoard,
          variables: { uuid: action.payload.uuid },
        })
      ).pipe(
        mergeMap(({ data }: { data: JoinBoardResponse }) =>
          of(
            joinLobbySucceed(action.payload.uuid, data.joinBoard.name),
            push('/lobby')
          )
        ),
        catchError((error: any) => of(joinLobbyFailed(error)))
      )
    )
  );
