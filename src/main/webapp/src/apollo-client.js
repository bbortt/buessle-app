// @flow
import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  credentials: 'same-origin',
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT_URI || '/graphql',
});

export { apolloClient };
