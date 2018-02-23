import React from 'react'
import { AppRegistry } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import finallyShim from 'promise.prototype.finally';

import createApolloClient from './createApolloClient';
import { Routes } from "./routes";
import { isTokenValid } from "./src/utils/authorizationToken";
import './src/styles/default';

finallyShim.shim();

const client = createApolloClient();
const Router = Routes();

const Client = () => (
  <ApolloProvider client={client}>
    <Router />
  </ApolloProvider>
)

AppRegistry.registerComponent('HelloWorld', () => Client);
