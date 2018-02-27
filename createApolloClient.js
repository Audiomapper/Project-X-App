/* eslint-disable no-underscore-dangle */
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';

import { getGraphqlEndpoint } from './baseUrls';
import { getToken } from './src/utils/authorizationToken';

export default () => {

  const cache = new InMemoryCache({
    addTypename: true,
    dataIdFromObject: (result) => {
      if (result.id && result.__typename) {
        return `${result.__typename}:${result.id}`;
      }
      return null;
    }
  });

  const middlewareLink = setContext(() => ({
    headers: {
      authorization: getToken() || null
    }
  }));

  const httpLink = createHttpLink({ uri: getGraphqlEndpoint() });

  const link = middlewareLink.concat(httpLink);

  const client = new ApolloClient({
    link,
    cache
  });

  return client;
};
