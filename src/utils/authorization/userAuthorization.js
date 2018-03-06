import { AsyncStorage } from 'react-native';

const AUTH_TOKEN = 'AUTH_TOKEN';

let userToken;

export const logInUser = (newToken) => {
  userToken = newToken;
  return AsyncStorage.setItem(AUTH_TOKEN, newToken);
};

export const logOutUser = () => {
  userToken = undefined;
  return AsyncStorage.removeItem(AUTH_TOKEN);
};

export const getUserToken = async () => {
  if (userToken) {
    return Promise.resolve(userToken);
  }
  userToken = await AsyncStorage.getItem(AUTH_TOKEN);
  return userToken;
};

export const isUserTokenValid = async () => {
  const response = await getUserToken();
  if (response !== null) {
    return true;
  }
  return false;
};
