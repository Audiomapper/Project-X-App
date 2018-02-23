import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';
import { LetterSpacing } from '../../components/Shared/LetterSpacing/LetterSpacing';

import { isTokenValid } from "../../utils/authorizationToken";
import * as Styles from '../../styles/variables';
import Logo from './images/logo.png';

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    isTokenValid()
    .then(result => {
      if (result) {
        setTimeout(() => {
            this.props.navigation.navigate('Dashboard');
        }, 1000);
      }

      const loginScreen = setTimeout(() => {
        this.props.navigation.navigate('Login');
      }, 1000);

      return loginScreen;
    })
    .catch(err => {
      alert("An error occurred")
    });
  }

  render() {
    return (
      <View
        style={styles.container}>
        <Image
          source={Logo}
          style={styles.logo} />
        <LetterSpacing
          textStyle={styles.title}
          spacing={6}>
          AUDIOMAPPER
        </LetterSpacing>
        <LetterSpacing
          spacing={4}>
          educate your travels
        </LetterSpacing>
      </View>

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
    backgroundColor: '#3a98c7'
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
