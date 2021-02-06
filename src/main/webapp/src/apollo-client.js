// @flow
import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT_URI || '/graphql',
});

const wsLink = new WebSocketLink({
  uri:
    process.env.REACT_APP_GRAPHQL_SUBSCRIPTION_ENDPOINT_URi ||
    'ws://localhost:8080/subscriptions',
  options: {
    lazy: true,
    // reconnect: true,
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

const apolloClient: typeof ApolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  credentials: 'same-origin',
  link: splitLink,
});

export { apolloClient };
