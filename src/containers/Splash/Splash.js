import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Image,
  ImageBackground
} from 'react-native';

import LetterSpacing from '~/components/Shared/LetterSpacing/LetterSpacing';
import { isLoggedIn } from '~/utils/authorization/authorization';
import Logo from '~/images/logo.png';
import styles from './splashStyles';
import Background from './images/bg.jpg';

export class SplashComponent extends Component {
  async componentWillMount() {
    const loggedIn = await isLoggedIn();
    setTimeout(() => {
      if (loggedIn) {
        return this.props.navigation.navigate('Dashboard');
      }
      return this.props.navigation.navigate('Login');
    }, 1000);
  }

  render() {
    return (
      <ImageBackground
        source={Background}
        style={styles.container}>
        <Image
          source={Logo}
          style={styles.logo} />
        <LetterSpacing
          textStyle={styles.title}
          spacing={5}>
          AUDIOMAPPER
        </LetterSpacing>
        <LetterSpacing
          spacing={3}>
          educate your travels
        </LetterSpacing>
      </ImageBackground>
    );
  }
}

SplashComponent.propTypes = {
  navigation: PropTypes.object
};

export default SplashComponent;
