import React from 'react';
import { Platform, Text, Animated, Easing } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Login from './src/containers/Login/Login';
import Dashboard from './src/containers/Dashboard/Dashboard';
import Splash from './src/containers/Splash/Splash';
import Register from './src/containers/Register/Register';

const transitionConfig = () => ({
  screenInterpolator: (sceneProps: NavigationSceneRendererProps) => {
    const { position, scene, progress } = sceneProps;
    const { index } = scene;
    const inputRange = [index - 1, index, index + 1];
    const opacity = position.interpolate({
        inputRange,
        outputRange: [0, 1, 0],
    });

    return { opacity };
  }
});

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
    },
    Register: {
      screen: Register
    }
  }, {
    initialRouteName: 'Splash',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    },
    transitionConfig
  });
};
