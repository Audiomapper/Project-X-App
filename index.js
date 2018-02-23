import React from 'react'
import { AppRegistry } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import finallyShim from 'promise.prototype.finally';

import createApolloClient from './createApolloClient';
import { createRootNavigator } from "./router";
import { getToken } from "./src/utils/authorizationToken";
import './src/styles/default';

finallyShim.shim();

const client = createApolloClient();

export default class Client extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      loading: true
    };
  }

  componentWillMount() {
    getToken()
    .then(result => {
      this.setState({
        signedIn: result,
        loading: false
      })
    })
    .catch(err => {
      alert("An error occurred")
    });
  }

  render() {
    const { signedIn, loading } = this.state;
    const App = createRootNavigator(signedIn, loading);
    return (
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    );
  }
}

AppRegistry.registerComponent('HelloWorld', () => Client);
