import React from 'react';
import PropTypes from 'prop-types';
import {
  View
} from 'react-native';

import { Letter } from './Letter';
import styles from './letterSpacingStyles';

const spacingForLetterIndex = (
  letters,
  index,
  spacing
) => {
  if (letters.length - 1 === index) {
    return 0;
  }
  return spacing;
};

const LetterSpacing = (props) => {
  const {
    children,
    spacing,
    viewStyle,
    textStyle,
    onPress
  } = props;
  const letters = children.split('');
  return (
    <View
      style={[styles.container, viewStyle]}>
      {letters.map((letter, index) => (
        <Letter
          key={letter}
          spacing={spacingForLetterIndex(letters, index, spacing)}
          textStyle={textStyle}
          onPress={onPress}>
          {letter}
        </Letter>
      ))}
    </View>
  );
};

LetterSpacing.propTypes = {
  children: PropTypes.string,
  spacing: PropTypes.string,
  viewStyle: PropTypes.object,
  textStyle: PropTypes.object,
  onPress: PropTypes.func
};

export default LetterSpacing;
