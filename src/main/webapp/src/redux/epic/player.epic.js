// @flow
import type { Action } from 'redux';
import { ofType } from 'redux-observable';

import type { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { loader } from 'graphql.macro';
import { apolloClient } from '../../apollo-client';

import {
  initializePlayerFailed,
  initializePlayerSucceed,
  PLAYER_INITIALIZE,
} from '../action/player.action';
import type {
  PlayerInitializeAction,
  PlayerInitializeFailedAction,
  PlayerInitializeSucceedAction,
} from '../action/player.action';

const registerPlayer = loader('../../graphql/mutation_register-player.graphql');
type RegisterPlayerResponse = { registerPlayer: { name: string } };

export const initializePlayerEpic = (
  action: Observable<Action<PlayerInitializeAction>>
): Observable<
  Action<PlayerInitializeSucceedAction | PlayerInitializeFailedAction>
> =>
  action.pipe(
    ofType(PLAYER_INITIALIZE),
    mergeMap((action: PlayerInitializeAction) =>
      apolloClient
        .mutate({
          mutation: registerPlayer,
          variables: { name: action.payload.name },
        })
        .then((response: { data: RegisterPlayerResponse }) =>
          initializePlayerSucceed(response.data.registerPlayer.name)
        )
        .catch((error: any) => initializePlayerFailed(error))
    )
  );
