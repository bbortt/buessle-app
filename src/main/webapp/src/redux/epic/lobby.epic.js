// @flow
import type { Action } from 'redux';
import type { ActionsObservable, StateObservable } from 'redux-observable';
import { ofType } from 'redux-observable';
import { push } from 'connected-react-router';

import { filter, map, mergeMap, withLatestFrom } from 'rxjs/operators';

import store from '../store';

import { loader } from 'graphql.macro';
import { apolloClient } from '../../apollo-client';

import type { LobbyConnectAction } from '../action/lobby.action';
import { connectedToLobby, LOBBY_CONNECT } from '../action/lobby.action';

import type { ApplicationState } from '../reducer';
import { of } from 'rxjs';

const connectLobby = loader('../../graphql/subscription_connect-lobby.graphql');
type LobbyAction = Action<string> & { payload: string };

export const connectLobbyEpic = (
  action: ActionsObservable<Action<LobbyConnectAction>>,
  state: StateObservable<ApplicationState>
): ActionsObservable<Action<LobbyConnectAction>> =>
  action.pipe(
    ofType(LOBBY_CONNECT),
    withLatestFrom(state),
    filter(
      ([, currentState: ApplicationState]) => !currentState.lobby.connected
    ),
    map(([, currentState: ApplicationState]) => {
      if (!currentState.lobby.uuid) {
        return push('/');
      }

      apolloClient
        .subscribe({
          query: connectLobby,
          variables: { uuid: currentState.lobby.uuid },
        })
        .subscribe(
          (response: { data: LobbyAction }) => {
            const { type, payload } = response.data;
            store.dispatch({ type, payload: JSON.parse(payload) });
          },
          () => push('/')
        );

      return connectedToLobby();
    })
  );
