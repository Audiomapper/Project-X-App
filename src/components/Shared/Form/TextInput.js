import React from 'react';
import PropTypes from 'prop-types';
import {
  TextInput,
  View,
  Text
} from 'react-native';

import LetterSpacing from '../../../components/Shared/LetterSpacing/LetterSpacing';
import styles from './textInputStyles';

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
      onChangeText={values => onChangeText(name, values)}
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

TextInputComponent.propTypes = {
  onChangeText: PropTypes.func,
  onBlurText: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  style: PropTypes.object,
  field: PropTypes.object,
  form: PropTypes.object
};

export default TextInputComponent;
