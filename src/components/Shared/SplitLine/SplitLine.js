import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text
} from 'react-native';

import styles from './splitLineStyles';

const SplitLineComponent = ({
  children
}) => (
  <View style={styles.container}>
    <View style={styles.line} />
    <Text style={styles.text}>
      {children}
    </Text>
    <View style={styles.line} />
  </View>
);

SplitLineComponent.propTypes = {
  children: PropTypes.string
};

export default SplitLineComponent;
