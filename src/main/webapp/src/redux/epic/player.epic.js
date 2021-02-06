// @flow
import type { Action } from 'redux';
import type { ActionsObservable } from 'redux-observable';
import { ofType } from 'redux-observable';

import { from, of } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';

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
  action: ActionsObservable<Action<PlayerInitializeAction>>
): ActionsObservable<Action<any>> =>
  action.pipe(
    ofType(PLAYER_INITIALIZE),
    mergeMap((action: PlayerInitializeAction) =>
      from(
        apolloClient.mutate({
          mutation: registerPlayer,
          variables: { name: action.payload.name },
        })
      ).pipe(
        mergeMap(({ data }: { data: RegisterPlayerResponse }) =>
          of(
            initializePlayerSucceed(data.registerPlayer.name),
            action.payload.callback
          )
        ),
        catchError((error: any) => of(initializePlayerFailed(error)))
      )
    )
  );
