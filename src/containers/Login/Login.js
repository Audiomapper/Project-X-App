import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ImageBackground,
  Image,
  View
} from 'react-native';
import { LoginManager } from 'react-native-fbsdk';

import Background from '~/images/bg.jpg';
import Logo from '~/images/logo.png';
import Button from '~/components/Shared/Button/Button';
import SplitLine from '~/components/Shared/SplitLine/SplitLine';
import LetterSpacing from '~/components/Shared/LetterSpacing/LetterSpacing';
import { colors } from '~/styles/variables';
import styles from './loginStyles';
import LoginFormWithData from './LoginForm/LoginFormWithData';

export class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      facebookLogin: false
    };
    this.handleFacebookLogin = this.handleFacebookLogin.bind(this);
  }

  // eslint-disable-next-line
  handleFacebookLogin() {
    this.setState({
      facebookLogin: true
    });

    LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_friends'])
      .then((result) => {
        this.setState({
          facebookLogin: true
        });
        if (result.isCancelled) {
          return console.log('Login cancelled');
        }
        return this.props.navigation.navigate('Dashboard');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {

    const {
      navigation
    } = this.props;

    return (
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
            loading={this.state.facebookLogin}
            buttonStyle={styles.facebook}
            highLightColor={colors.facebook}
            onPress={this.handleFacebookLogin}
            letterSpacing={2}>
            LOG IN WITH FACEBOOK
          </Button>
          <Button
            primary
            buttonStyle={styles.google}
            noMargin
            highLightColor={colors.google}
            onPress={() => console.log('sdsd')}
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
  }
}

Login.propTypes = {
  navigation: PropTypes.object
};

export default Login;
