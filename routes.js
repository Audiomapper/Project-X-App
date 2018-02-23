import React from 'react';
import { Platform, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Login from './src/containers/Login/Login';
import Dashboard from './src/containers/Dashboard/Dashboard';
import Splash from './src/containers/Splash/Splash';

export const Routes = () => {
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
    initialRouteName: 'Splash',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }
  });
};
