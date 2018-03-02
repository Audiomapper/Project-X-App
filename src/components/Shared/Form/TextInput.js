import React from 'react';
import PropTypes from 'prop-types';
import {
  TextInput,
  View,
  Text
} from 'react-native';

import LetterSpacing from '~/components/Shared/LetterSpacing/LetterSpacing';
import styles from './textInputStyles';

const TextInputComponent = ({
  placeholder,
  label,
  style,
  input,
  meta: {
    error,
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
      {...input}
      onChangeText={input.onChange} // eslint-disable-line
      onBlur={input.onBlur} // eslint-disable-line
      value={input.value}
      placeholderTextColor={'#999'}
      placeholder={placeholder}
    />
    { touched && error &&
      <Text
        style={styles.error}>
        {error}
      </Text>
    }
  </View>
);

TextInputComponent.propTypes = {
  meta: PropTypes.object,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  style: PropTypes.object,
  input: PropTypes.object
};

export default TextInputComponent;
