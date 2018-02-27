import React, { Component } from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Text
} from 'react-native';

import { LetterSpacing } from '../../../components/Shared/LetterSpacing/LetterSpacing';
import * as Styles from '../../../styles/variables';

const TextInputComponent = ({
  onChangeText,
  onBlurText,
  placeholder,
  label,
  style,
  field: {
    value,
    name
  },
  form: {
    errors,
    touched
  }
}) => (
  <View style={[styles.container, style]}>
    { label &&
      <LetterSpacing
        style={styles.label}
        spacing={2}>
        {label}
      </LetterSpacing>
    }
    <TextInput
      onBlur={() => onBlurText(name)}
      placeholderTextColor={'#999'}
      onChangeText={value => onChangeText(name, value)}
      placeholder={placeholder}
      value={value}
    />
    { errors[name] && touched[name] &&
      <Text
        style={styles.error}>
        {errors[name]}
      </Text>
    }
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: Styles.sizes.md
  },
  error: {
    color: Styles.colors.error,
    marginTop: Styles.sizes.xxs
  },
  label: {
    fontSize: 10
  }
});

export default TextInputComponent;
