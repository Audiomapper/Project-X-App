import GoogleSignIn from 'react-native-google-sign-in';
import { AsyncStorage } from 'react-native';

let googleUserToken;

export const logOutGoogleUser = () => {
  googleUserToken = undefined;
  AsyncStorage.removeItem('GOOGLE_AUTH_TOKEN');
  return GoogleSignIn.signOutPromise();
};

export const logInGoogleUser = (newToken) => {
  googleUserToken = newToken;
  return AsyncStorage.setItem('GOOGLE_AUTH_TOKEN', newToken);
};

export const getGoogleUserToken = async () => {
  if (googleUserToken) {
    return Promise.resolve(googleUserToken);
  }
  googleUserToken = await AsyncStorage.getItem('GOOGLE_AUTH_TOKEN');
  return googleUserToken;
};

export const isGoogleUserLoggedIn = async () => {
  const userToken = await getGoogleUserToken();
  const accessToken = await GoogleSignIn.currentUser();
  console.log(accessToken);

  if (userToken && accessToken) {
    return true;
  }

  logOutGoogleUser();
  return false;
};
