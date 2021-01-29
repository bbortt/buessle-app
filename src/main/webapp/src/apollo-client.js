import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT_URI,
  cache: new InMemoryCache(),
});

export { apolloClient };
