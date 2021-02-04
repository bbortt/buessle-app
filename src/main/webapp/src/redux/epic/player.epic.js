// @flow
import type { Action } from 'redux';
import { ofType } from 'redux-observable';

import type { Observable } from 'rxjs';
import { from, of } from 'rxjs';
import { catchError, mergeMap, tap } from 'rxjs/operators';

import { loader } from 'graphql.macro';
import { apolloClient } from '../../apollo-client';

import type { PlayerInitializeAction } from '../action/player.action';
import {
  initializePlayerFailed,
  initializePlayerSucceed,
  PLAYER_INITIALIZE,
} from '../action/player.action';

const registerPlayer = loader('../../graphql/mutation_register-player.graphql');
type RegisterPlayerResponse = { registerPlayer: { name: string } };

export const initializePlayerEpic = (
  action: Observable<Action<PlayerInitializeAction>>
): Observable<Action<any>> =>
  action.pipe(
    ofType(PLAYER_INITIALIZE),
    mergeMap((action: PlayerInitializeAction) =>
      from(
        apolloClient.mutate({
          mutation: registerPlayer,
          variables: { name: action.payload.name },
        })
      ).pipe(
        tap(() => console.log('callback: ', action.payload.callback)),
        mergeMap((response: { data: RegisterPlayerResponse }) =>
          of(
            initializePlayerSucceed(response.data.registerPlayer.name),
            action.payload.callback
          )
        ),
        catchError((error: any) => of(initializePlayerFailed(error)))
      )
    )
  );
