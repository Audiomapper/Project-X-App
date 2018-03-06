import {
  isFacebookTokenValid,
  logOutFacebook
} from './facebookAuthorization';

import {
  isUserTokenValid,
  logOutUser
} from './userAuthorization';

export const isLoggedIn = Promise.all([isFacebookTokenValid, isUserTokenValid]);

export const logOut = async () => {
  const response = await isFacebookTokenValid;
  if (response) {
    return logOutFacebook;
  }
  return logOutUser;
};
