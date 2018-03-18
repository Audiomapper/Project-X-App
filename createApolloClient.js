// COMMENTED OUT CODE IS FOR MOCKS

// import { ApolloClient } from 'react-apollo';
// import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
// import { mockNetworkInterfaceWithSchema } from 'apollo-test-utils';
//
// import { typeDefs } from './graphql/schema';
// import mocks from './graphql/mocks';
//
// export default () => {
//   const schema = makeExecutableSchema({ typeDefs });
//
//   addMockFunctionsToSchema({
//     schema,
//     mocks
//   });
//
//   const networkInterface = mockNetworkInterfaceWithSchema({ schema });
//
//   const client = new ApolloClient({ networkInterface });
//
//   return client;
// };

/* eslint-disable no-underscore-dangle */
import { ApolloClient, createNetworkInterface } from 'react-apollo';

import { getUserToken } from './src/utils/authorization/userAuthorization';
import { getFacebookUserToken } from './src/utils/authorization/facebookAuthorization';
import { getGraphqlEndpoint } from './baseUrls';

export default () => {

  /* Batching can be turned back on to improve performance when it's
   * available server-side:
   *
   * import { createBatchingNetworkInterface } from 'react-apollo';
   * const networkInterface = createBatchingNetworkInterface({
   *   batchInterval: 10,
   *   ... rest as normal
   * })
   * */
  const networkInterface = createNetworkInterface({
    uri: getGraphqlEndpoint(),
    // opts: {
    //   credentials: 'include',
    //   mode: 'cors'
    // },
  });

  networkInterface.use([{
    async applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {}; // Create the header object if needed.
      }
      // get the authentication token from local storage if it exists
      const userToken = await getUserToken();
      const facebookUserToken = await getFacebookUserToken();

      req.options.headers.authorization = facebookUserToken || userToken || null;

      next();
    }
  }]);

  const client = new ApolloClient({
    networkInterface,
    dataIdFromObject: (result) => {
      if (result.id && result.__typename) {
        return `${result.__typename}:${result.id}`;
      }
      return null;
    }
  });

  return client;
};
