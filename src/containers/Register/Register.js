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
import RegisterFormWithData from './RegisterFormWithData';
import Button from '../../components/Shared/Button/Button';
import SplitLine from '../../components/Shared/SplitLine/SplitLine';
import { LetterSpacing } from '../../components/Shared/LetterSpacing/LetterSpacing';
import * as Styles from '../../styles/variables';

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

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#212d3b'
  },
  container: {
    width: '70%'
  },
  logo: {
    alignSelf: 'center',
    width: 70,
    height: 79,
    marginBottom: Styles.sizes.sm
  },
  facebook: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
  google: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  }
});

export default Register;
