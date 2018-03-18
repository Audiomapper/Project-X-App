import {
  LoginManager,
  AccessToken
} from 'react-native-fbsdk';
import { AsyncStorage } from 'react-native';

let facebookUserToken;

export const logOutFacebookUser = () => {
  facebookUserToken = undefined;
  AsyncStorage.removeItem('FACEBOOK_AUTH_TOKEN');
  return LoginManager.logOut();
};

export const logInFacebookUser = (newToken) => {
  facebookUserToken = newToken;
  return AsyncStorage.setItem('FACEBOOK_AUTH_TOKEN', newToken);
};

export const getFacebookUserToken = async () => {
  if (facebookUserToken) {
    return Promise.resolve(facebookUserToken);
  }
  facebookUserToken = await AsyncStorage.getItem('FACEBOOK_AUTH_TOKEN');
  return facebookUserToken;
};

export const isFacebookUserLoggedIn = async () => {
  const userToken = await getFacebookUserToken();
  const accessToken = await AccessToken.getCurrentAccessToken();

  if (userToken && accessToken) {
    return true;
  }

  logOutFacebookUser();
  return false;
};
