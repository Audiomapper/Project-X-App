import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleSignIn from 'react-native-google-sign-in';
import Config from 'react-native-config';

import Button from '~/components/Shared/Button/Button';
import { colors } from '~/styles/variables';
import { logInGoogleUser } from '~/utils/authorization/googleAuthorization';
import styles from './googleLoginStyles';

export class GoogleLogin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      googleLogin: false
    };
    this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
    this.logInGoogleUser = this.logInGoogleUser.bind(this);
  }

  async handleGoogleLogin() {
    this.setState({
      googleLogin: true
    });

    await GoogleSignIn.configure({
      clientID: Config.GOOGLE_CLIENT_ID
    })
      .then(() => {
        this.logInGoogleUser();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async logInGoogleUser() {
    await GoogleSignIn.signInPromise()
      .then((response) => {
        console.log(response);
        const user = {
          idToken: response.idToken,
          userId: response.userID
        };
        this.props.loginWithGoogle(user)
          .then((result) => {
            this.setState({
              googleLogin: false
            });
            logInGoogleUser(result.data.googleLogIn);
            this.props.navigation.navigate('Dashboard');
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <Button
        primary
        loading={this.state.googleLogin}
        buttonStyle={styles.google}
        highLightColor={colors.google}
        onPress={this.handleGoogleLogin}
        letterSpacing={2}>
        LOG IN WITH GOOGLE
      </Button>
    );
  }
}

GoogleLogin.propTypes = {
  navigation: PropTypes.object,
  loginWithGoogle: PropTypes.func
};

export default GoogleLogin;
