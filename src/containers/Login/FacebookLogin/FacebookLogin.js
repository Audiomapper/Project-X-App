import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

import Button from '~/components/Shared/Button/Button';
import { colors } from '~/styles/variables';
import { logInFacebookUser } from '~/utils/authorization/facebookAuthorization';
import styles from './facebookLoginStyles';

export class FacebookLogin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      facebookLogin: false
    };
    this.handleFacebookLogin = this.handleFacebookLogin.bind(this);
    this.handleFacebookAccessToken = this.handleFacebookAccessToken.bind(this);
  }

  handleFacebookLogin() {
    this.setState({
      facebookLogin: true
    });

    LoginManager.logInWithReadPermissions(['public_profile', 'email'])
      .then((result) => {
        if (result.isCancelled) {
          this.setState({
            facebookLogin: false
          });
          return console.log('Login cancelled');
        }
        return this.handleFacebookAccessToken();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleFacebookAccessToken() {
    AccessToken.getCurrentAccessToken()
      .then((data) => {
        this.props.loginWithFacebook(data.accessToken.toString())
          .then((response) => {
            this.setState({
              facebookLogin: false
            });
            logInFacebookUser(response.data.facebookLogIn);
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
        loading={this.state.facebookLogin}
        buttonStyle={styles.facebook}
        highLightColor={colors.facebook}
        onPress={this.handleFacebookLogin}
        letterSpacing={2}>
        LOG IN WITH FACEBOOK
      </Button>
    );
  }
}

FacebookLogin.propTypes = {
  navigation: PropTypes.object,
  loginWithFacebook: PropTypes.func
};

export default FacebookLogin;
