import GoogleSignIn from 'react-native-google-sign-in';

export const logOutGoogle = () => GoogleSignIn.signOutPromise();

export const isGoogleUserValid = async () => {
  const response = await GoogleSignIn.currentUser();
  if (response === null || typeof response === 'undefined') {
    return false;
  }
  return true;
};
