import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

const Letter = (props) => {
  const {
    children,
    spacing,
    textStyle,
    onPress
  } = props;

  const letterStyles = [
    textStyle,
    { paddingRight: spacing }
  ];

  return (
    <Text
      style={letterStyles}
      onPress={onPress}>
      {children}
    </Text>
  );
};

Letter.propTypes = {
  children: PropTypes.string,
  spacing: PropTypes.string,
  textStyle: PropTypes.object,
  onPress: PropTypes.func
};

export default Letter;
