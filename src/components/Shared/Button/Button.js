import React, { Component } from 'react';
import SpacedText from 'react-native-letter-spacing';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from 'react-native';

import { LetterSpacing } from '../../../components/Shared/LetterSpacing/LetterSpacing';
import * as Styles from '../../../styles/variables';

const ButtonComponent = ({
  buttonStyle,
  textStyle,
  letterSpacing,
  onPress,
  disabled,
  children,
  loading,
  primary
}) => (
  <TouchableWithoutFeedback
    disabled={disabled}
    onPress={onPress}>
    <View
      style={[
        primary && !disabled && styles.primary,
        !primary && !disabled && styles.secondary,
        disabled && styles.disabled,
        loading && styles.loading,
        styles.button,
        buttonStyle
      ]}>
      <LetterSpacing
        style={[styles.text, textStyle]}
        spacing={letterSpacing || 0}>
        {children}
      </LetterSpacing>
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  button: {
    height: (Styles.sizes.lg + 4),
    width: '100%',
    borderRadius: (Styles.sizes.lg + 4),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Styles.sizes.sm
  },
  text: {
    color: Styles.colors.white,
    fontSize: Styles.fontSizes.sm
  },
  primary: {
    backgroundColor: '#43b5b7'
  },
  disabled: {
    backgroundColor: '#3a98c7'
  }
});

export default ButtonComponent;
