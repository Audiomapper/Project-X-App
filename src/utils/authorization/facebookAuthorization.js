import {
  LoginManager,
  AccessToken
} from 'react-native-fbsdk';

export const logOutFacebook = () => LoginManager.logOut();

export const getFacebookToken = async () => {
  const accessToken = await AccessToken.getCurrentAccessToken();
  return accessToken;
};

export const isFacebookTokenValid = async () => {
  const response = await getFacebookToken();
  if (response !== null) {
    return true;
  }
  return false;
};
