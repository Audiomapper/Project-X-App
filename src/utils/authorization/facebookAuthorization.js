import {
  LoginManager,
  AccessToken
} from 'react-native-fbsdk';

let facebookToken;

export const logOutFacebook = () => {
  facebookToken = undefined;
  return LoginManager.logOut();
};

export const getFacebookToken = async () => {
  if (facebookToken) {
    return Promise.resolve(facebookToken);
  }
  facebookToken = await AccessToken.getCurrentAccessToken();
  return facebookToken;
};

export const isFacebookTokenValid = async () => {
  const response = await getFacebookToken();
  if (response !== null) {
    return true;
  }
  return false;
};
