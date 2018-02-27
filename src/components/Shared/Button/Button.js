import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  View,
  ActivityIndicator
} from 'react-native';

import { LetterSpacing } from '../../../components/Shared/LetterSpacing/LetterSpacing';
import * as Styles from '../../../styles/variables';

const ButtonComponent = ({
  buttonStyle,
  textStyle,
  letterSpacing,
  onPress,
  children,
  loading,
  primary,
  noMargin
}) => (
  <TouchableHighlight
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
          color={Styles.colors.white} />
      }
    </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  container: {
    height: (Styles.sizes.lg + 4),
    width: '100%',
    borderRadius: (Styles.sizes.lg + 4),
    marginBottom: Styles.sizes.sm
  },
  noMargin: {
    marginBottom: 0
  },
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
  }
});

export default ButtonComponent;
