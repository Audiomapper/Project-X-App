import React from 'react';
import { Platform, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Login from './src/containers/Login/Login';
import Dashboard from './src/containers/Dashboard/Dashboard';
import Splash from './src/containers/Splash/Splash';

export const createRootNavigator = (signedIn = false, loading = true) => {
  return StackNavigator({
    Splash: {
      screen: Splash
    },
    Dashboard: {
      screen: Dashboard
    },
    Login: {
      screen: Login
    }
  }, {
    initialRouteName: signedIn ? 'Dashboard' : (loading ? 'Splash' : 'Login'),
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }
  });
};
