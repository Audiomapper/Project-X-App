import React from 'react';
import { AppRegistry } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import finallyShim from 'promise.prototype.finally';

import configureStore from './configureStore';
import createApolloClient from './createApolloClient';
import Routes from './routes';
import './src/styles/default';

finallyShim.shim();

const client = createApolloClient();
const store = configureStore(client);
const Router = Routes();

const Client = () => (
  <ApolloProvider store={store} client={client}>
    <Router />
  </ApolloProvider>
);

AppRegistry.registerComponent('app', () => Client);
