import React from 'react';
import PropTypes from 'prop-types';

import {
  Text,
  View
} from 'react-native';
import { logOut } from '~/utils/authorization/authorization';

const Dashboard = ({
  currentUser
}) => {
  console.log(currentUser);
  return (
    <View>
      <Text>{currentUser && currentUser.firstName}</Text>
      <Text onPress={() => logOut()}>logOutFacebook</Text>
    </View>
  );
};

Dashboard.propTypes = {
  currentUser: PropTypes.object
};

export default Dashboard;
