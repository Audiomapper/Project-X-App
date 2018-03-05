import { AsyncStorage } from 'react-native';
import { AccessToken, LoginManager } from 'react-native-fbsdk';

const AUTH_TOKEN = 'AUTH_TOKEN';

let userToken;
let facebookToken;

export const logInUser = (newToken) => {
  userToken = newToken;
  return AsyncStorage.setItem(AUTH_TOKEN, newToken);
};

export const logOutUser = () => {
  userToken = undefined;
  return AsyncStorage.removeItem(AUTH_TOKEN);
};

export const logOutFacebook = () => {
  facebookToken = undefined;
  return LoginManager.logOut();
};

export const getUserToken = async () => {
  if (userToken) {
    return Promise.resolve(userToken);
  }
  userToken = await AsyncStorage.getItem(AUTH_TOKEN);
  return userToken;
};

export const getFacebookToken = async () => {
  if (facebookToken) {
    return Promise.resolve(facebookToken);
  }
  facebookToken = await AccessToken.getCurrentAccessToken();
  return facebookToken;
};

export const isUserTokenValid = async () => {
  const response = await getUserToken();
  if (response !== null) {
    return true;
  }
  return false;
};

export const isFacebookTokenValid = async () => {
  const response = await getFacebookToken();
  if (response !== null) {
    return true;
  }
  return false;
};

export const isLoggedIn = Promise.all([isFacebookTokenValid(), isUserTokenValid()]);

export const logOut = async () => {
  const response = await isFacebookTokenValid();
  if (response) {
    return logOutFacebook();
  }
  return logOutUser();
};
