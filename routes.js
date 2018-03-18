import { StackNavigator } from 'react-navigation';

import Login from '~/containers/Login/Login';
import DashboardWithData from '~/containers/Dashboard/DashboardWithData';
import Splash from '~/containers/Splash/Splash';
import Register from '~/containers/Register/Register';

const transitionConfig = () => ({
  screenInterpolator: (sceneProps) => {
    const { position, scene } = sceneProps;
    const { index } = scene;
    const inputRange = [index - 1, index, index + 1];
    const opacity = position.interpolate({
      inputRange,
      outputRange: [0, 1, 0]
    });

    return { opacity };
  }
});

const Routes = () => (
  StackNavigator({
    Splash: {
      screen: Splash
    },
    Dashboard: {
      screen: DashboardWithData
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
  })
);

export default Routes;
