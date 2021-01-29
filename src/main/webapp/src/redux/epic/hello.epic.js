import { ofType } from "redux-observable";
import { mergeMap } from "rxjs/operators";

import { gql } from "@apollo/client";

import { HELLO_FETCH, setHello } from "../action/hello.action";
import { apolloClient } from "../../apollo-client";

const HELLO_FETCH_QUERY = gql`
  {
    hello {
      world
    }
  }
`;

export const helloFetchEpic = (action, state) =>
  action.pipe(
    ofType(HELLO_FETCH),
    mergeMap((action) =>
      apolloClient
        .query({ query: HELLO_FETCH_QUERY })
        .then((response) => setHello(response.data.hello.world))
    )
  );
