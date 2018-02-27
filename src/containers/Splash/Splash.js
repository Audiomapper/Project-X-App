import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground
} from 'react-native';
import { LetterSpacing } from '../../components/Shared/LetterSpacing/LetterSpacing';

import { isTokenValid } from "../../utils/authorizationToken";
import * as Styles from '../../styles/variables';
import Logo from './images/logo.png';
import Background from './images/bg.jpg';

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    isTokenValid()
    .then(result => {
      setTimeout(() => {
        if (result) {
          return this.props.navigation.navigate('Dashboard');
        }
        return this.props.navigation.navigate('Login');
      }, 1000);
    })
    .catch(err => {
      alert("An error occurred")
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#212d3b'
  },
  logo: {
    width: 80,
    height: 91,
    marginBottom: Styles.sizes.sm
  },
  title: {
    fontFamily: Styles.fonts.titleFont,
    fontSize: Styles.sizes.md,
    marginBottom: Styles.sizes.xxs
  }
});
