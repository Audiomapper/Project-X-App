import React from 'react';
import {
  Text,
  StyleSheet,
  View
} from 'react-native';

const Splash = () => (
  <View
    style={styles.background}>
    <Text>Splash</Text>
  </View>
)

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'blue'
  }
});

export default Splash;
