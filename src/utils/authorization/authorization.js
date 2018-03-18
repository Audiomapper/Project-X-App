import {
  getFacebookUserToken,
  logOutFacebookUser,
  isFacebookUserLoggedIn
} from './facebookAuthorization';

import {
  logOutGoogleUser,
  getGoogleUserToken,
  isGoogleUserLoggedIn
} from './googleAuthorization';

import {
  getUserToken,
  logOutUser
} from './userAuthorization';

export const logOut = async () => {
  const loggedInWithFacebook = await getFacebookUserToken();
  const loggedInWithGoogle = await getGoogleUserToken();

  if (loggedInWithFacebook) {
    return logOutFacebookUser();
  }
  else if (loggedInWithGoogle) {
    return logOutGoogleUser();
  }

  return logOutUser();
};

export const isLoggedIn = async () => {
  const userLogin = await getUserToken();
  const facebookLogin = await isFacebookUserLoggedIn();
  const googleLogin = await isGoogleUserLoggedIn();

  if (userLogin || facebookLogin || googleLogin) {
    return true;
  }
  return false;
};
