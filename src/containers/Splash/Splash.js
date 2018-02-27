import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Image,
  ImageBackground
} from 'react-native';

import LetterSpacing from '../../components/Shared/LetterSpacing/LetterSpacing';
import { isTokenValid } from '../../utils/authorizationToken';
import styles from './splashStyles';
import Logo from '../../images/logo.png';
import Background from './images/bg.jpg';

export class Splash extends Component {
  componentWillMount() {
    isTokenValid()
      .then((result) => {
        setTimeout(() => {
          if (result) {
            return this.props.navigation.navigate('Dashboard');
          }
          return this.props.navigation.navigate('Login');
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
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

Splash.propTypes = {
  navigation: PropTypes.object
};

export default Splash;
