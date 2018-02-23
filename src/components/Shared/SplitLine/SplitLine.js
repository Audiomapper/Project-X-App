import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import * as Styles from '../../../styles/variables';

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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '50%',
    marginLeft: '25%',
    marginBottom: Styles.sizes.sm
  },
  line: {
    backgroundColor: Styles.colors.white,
    height: 1,
    flex: 1,
    alignSelf: 'center'
  },
  text: {
    alignSelf:'center',
    paddingHorizontal:5,
    fontSize: Styles.fonts.small,
    color: Styles.colors.white
  }
});

export default SplitLineComponent;
