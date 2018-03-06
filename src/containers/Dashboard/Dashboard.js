import React from 'react';
import {
  Text,
  View
} from 'react-native';
import { logOut } from '~/utils/authorization/authorization';
// import { signOut } from '~/utils/authorizationToken';

const Dashboard = () => (
  <View>
    <Text>dcdfdfdfdfdf</Text>
    <Text onPress={() => logOut()}>logOutFacebook</Text>
  </View>
);

export default Dashboard;
