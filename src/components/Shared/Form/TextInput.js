import React, { Component } from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Text
} from 'react-native';

import * as Styles from '../../../styles/variables';

const TextInputComponent = ({
  onChangeText,
  onBlurText,
  style,
  placeholder,
  field: {
    value,
    name
  },
  form: {
    errors,
    touched
  }
}) => (
  <View style={style}>
    <TextInput
      onBlur={() => onBlurText(name)}
      placeholderTextColor={Styles.colors.white}
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
  error: {
    color: Styles.colors.error
  }
});

export default TextInputComponent;
