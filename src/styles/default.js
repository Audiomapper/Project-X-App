import { Platform } from 'react-native';

import {
  setCustomView,
  setCustomTextInput,
  setCustomText,
  setCustomImage,
  setCustomTouchableOpacity
} from 'react-native-global-props';

import * as Styles from './variables';

const customTextInputProps = {
  underlineColorAndroid: 'rgba(0,0,0,0)',
  style: {
    height: 40,
    width: '100%',
    color: Styles.colors.white,
    borderBottomColor: Styles.colors.white,
    borderBottomWidth: 1,
    marginBottom: 6,
    letterSpacing: 2,
    fontSize: 14,
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Regular' : 'Roboto-Regular'
  }
};

const customTextProps = {
  style: {
    fontSize: 14,
    fontFamily: Platform.OS === 'ios' ? 'Roboto-Regular' : 'Roboto-Regular',
    color: Styles.colors.white
  }
};

const customImageProps = {
  resizeMode: 'cover'
};

const customTouchableOpacityProps = {
  hitSlop: { top: 15, right: 15, left: 15, bottom: 15 }
};

setCustomTextInput(customTextInputProps);
setCustomText(customTextProps);
setCustomImage(customImageProps);
setCustomTouchableOpacity(customTouchableOpacityProps);
