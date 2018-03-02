import React from 'react';
import PropTypes from 'prop-types';
import {
  ImageBackground,
  View
} from 'react-native';

import Background from '~/images/bg.jpg';
import Button from '~/components/Shared/Button/Button';
import SplitLine from '~/components/Shared/SplitLine/SplitLine';
import RegisterFormWithData from './RegisterForm/RegisterFormWithData';
import styles from './registerStyles';

const Register = ({
  navigation
}) => (
  <ImageBackground
    source={Background}
    style={styles.background}>
    <View style={styles.container}>
      <RegisterFormWithData navigation={navigation} />
      <SplitLine>
        OR
      </SplitLine>
      <Button
        primary
        buttonStyle={styles.facebook}
        letterSpacing={2}>
        LOG IN WITH FACEBOOK
      </Button>
      <Button
        primary
        buttonStyle={styles.google}
        noMargin
        letterSpacing={2}>
        LOG IN WITH GOOGLE
      </Button>
    </View>
  </ImageBackground>
);

Register.propTypes = {
  navigation: PropTypes.object
};

export default Register;
