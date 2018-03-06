import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ImageBackground,
  Image,
  View
} from 'react-native';
import { LoginManager } from 'react-native-fbsdk';
import GoogleSignIn from 'react-native-google-sign-in';

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
    this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
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
          this.setState({
            facebookLogin: false
          });
          return console.log('Login cancelled');
        }
        return this.props.navigation.navigate('Dashboard');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // eslint-disable-next-line
  async handleGoogleLogin() {
    await GoogleSignIn.configure({
      clientID: '513738044753-3dc308aq9qkippgvv265vqq95hq16ouc.apps.googleusercontent.com',
    });

    const user = await GoogleSignIn.signInPromise();

    console.log(user);
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
            onPress={this.handleGoogleLogin}
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
