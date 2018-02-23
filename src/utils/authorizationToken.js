import { AsyncStorage } from 'react-native';

const AUTH_TOKEN = 'AUTH_TOKEN';

let token;

export const getToken = async () => {
  if (token) {
    return Promise.resolve(token);
  }
  token = await AsyncStorage.getItem(AUTH_TOKEN);
  return token;
};

export const isTokenValid = async () => {
  try {
    const response =  await AsyncStorage.getItem(AUTH_TOKEN);
    if (response !== null) {
      return true
    }
    return false
  }
  catch (err) {
    console.log(err);
  }
}

export const signIn = (newToken) => {
  token = newToken;
  return AsyncStorage.setItem(AUTH_TOKEN, newToken);
};

export const signOut = () => {
  token = undefined;
  return AsyncStorage.removeItem(AUTH_TOKEN);
};
