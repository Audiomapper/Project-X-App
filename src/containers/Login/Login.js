import React from 'react';
import PropTypes from 'prop-types';
import {
  ImageBackground,
  Image,
  View
} from 'react-native';

import Background from '~/images/bg.jpg';
import Logo from '~/images/logo.png';
import Button from '~/components/Shared/Button/Button';
import SplitLine from '~/components/Shared/SplitLine/SplitLine';
import LetterSpacing from '~/components/Shared/LetterSpacing/LetterSpacing';
import styles from './loginStyles';
import LoginFormWithData from './LoginForm/LoginFormWithData';

const Login = ({
  navigation
}) => (
  <ImageBackground
    source={Background}
    style={styles.background}>
    <View style={styles.container}>
      <Image
        source={Logo}
        style={styles.logo} />
      <LoginFormWithData navigation={navigation} />
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
    <View style={styles.footer}>
      <LetterSpacing
        onPress={() => navigation.navigate('Register')}
        textStyle={styles.createAccount}
        spacing={2}>
        CREATE ACCOUNT
      </LetterSpacing>
      <LetterSpacing
        textStyle={styles.lostPassword}
        spacing={2}>
        LOST PASSWORD ?
      </LetterSpacing>
    </View>
  </ImageBackground>
);

Login.propTypes = {
  navigation: PropTypes.object
};

export default Login;
