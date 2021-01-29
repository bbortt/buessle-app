// @flow
import type { Action } from 'redux';
import { ofType } from 'redux-observable';

import type { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { gql } from '@apollo/client';

import { apolloClient } from '../../apollo-client';

import type {
  LobbyCreateAction,
  LobbyJoinAction,
} from '../action/lobby.action';
import {
  joinLobby,
  joinLobbyFailed,
  LOBBY_CREATE,
} from '../action/lobby.action';

import type Board from '../../model/board.type';

const MUTATION_CREATE_BOARD = gql`
  mutation CreateBoard($name: String!) {
    createBoard(name: $name) {
      uuid
    }
  }
`;

export const createLobbyEpic = (
  action: Observable<Action<LobbyCreateAction>>
): Observable<Action<LobbyJoinAction>> =>
  action.pipe(
    ofType(LOBBY_CREATE),
    mergeMap((action: LobbyCreateAction) =>
      apolloClient
        .mutate({
          mutation: MUTATION_CREATE_BOARD,
          variables: { name: action.payload.name },
        })
        .then((response: { data: Board }) => joinLobby(response.data.uuid))
        .catch((error: any) => joinLobbyFailed(action.payload.name, error))
    )
  );
