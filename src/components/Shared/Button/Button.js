import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableHighlight,
  View,
  ActivityIndicator
} from 'react-native';

import LetterSpacing from '~/components/Shared/LetterSpacing/LetterSpacing';
import { colors } from '~/styles/variables';
import styles from './buttonStyles';

const ButtonComponent = ({
  buttonStyle,
  textStyle,
  letterSpacing,
  onPress,
  children,
  loading,
  primary,
  noMargin,
  highLightColor
}) => (
  <TouchableHighlight
    underlayColor={highLightColor}
    style={[styles.container, noMargin && styles.noMargin]}
    onPress={onPress}>
    <View
      style={[
        primary && styles.primary,
        !primary && styles.secondary,
        loading && styles.loading,
        styles.button,
        buttonStyle
      ]}>
      { !loading &&
        <LetterSpacing
          style={[styles.text, textStyle]}
          spacing={letterSpacing || 0}>
          {children}
        </LetterSpacing>
      }
      { loading &&
        <ActivityIndicator
          animating={loading}
          size="small"
          color={colors.white} />
      }
    </View>
  </TouchableHighlight>
);

ButtonComponent.propTypes = {
  highLightColor: PropTypes.string,
  buttonStyle: PropTypes.object,
  textStyle: PropTypes.object,
  letterSpacing: PropTypes.number,
  onPress: PropTypes.func,
  children: PropTypes.string,
  loading: PropTypes.bool,
  primary: PropTypes.bool,
  noMargin: PropTypes.bool
};

export default ButtonComponent;
