import {
  isFacebookTokenValid,
  logOutFacebook
} from './facebookAuthorization';

import {
  logOutGoogle,
  isGoogleUserValid
} from './googleAuthorization';

import {
  isUserTokenValid,
  logOutUser
} from './userAuthorization';

export const isLoggedIn = Promise.all([isFacebookTokenValid(), isUserTokenValid(), isGoogleUserValid()]);

export const logOut = async () => {
  const loggedInWithFacebook = await isFacebookTokenValid();
  const loggedInWithGoogle = await isGoogleUserValid();

  if (loggedInWithFacebook) {
    return logOutFacebook();
  }
  else if (loggedInWithGoogle) {
    console.log(logOutGoogle());
    return logOutGoogle();
  }
  return logOutUser();
};
