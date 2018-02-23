import React from 'react';
import SpacedText from 'react-native-letter-spacing';
import {
  Platform,
  StyleSheet,
  ImageBackground,
  Text,
  Image,
  View
} from 'react-native';

import Background from './images/bg.jpg';
import Logo from './images/logo.png';
import LoginFormWithData from './LoginFormWithData';
import Button from '../../components/Shared/Button/Button';
import SplitLine from '../../components/Shared/SplitLine/SplitLine';
import * as Styles from '../../styles/variables';

const Login = () => (
  <ImageBackground
    source={Background}
    style={styles.background}>
    <View style={styles.container}>
      <Image
        source={Logo}
        style={styles.logo} />
      <LoginFormWithData />
      <SplitLine>
        OK
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
        letterSpacing={2}>
        LOG IN WITH GOOGLE
      </Button>
    </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center'
  },
  container: {
    width: '70%'
  },
  logo: {
    alignSelf: 'center',
    width: 120,
    height: (100 + Styles.sizes.lg),
    marginBottom: Styles.sizes.md,
    marginTop: (Styles.sizes.xs * 6)
  },
  facebook: {
    backgroundColor: Styles.colors.facebook,
  },
  google: {
    backgroundColor: Styles.colors.google,
  }
});

export default Login;
