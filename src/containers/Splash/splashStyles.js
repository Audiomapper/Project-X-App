import {
  StyleSheet
} from 'react-native';

import {
  sizes,
  fonts
} from '../../styles/variables';

export default StyleSheet.flatten({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#212d3b'
  },
  logo: {
    width: 80,
    height: 91,
    marginBottom: sizes.sm
  },
  title: {
    fontFamily: fonts.titleFont,
    fontSize: sizes.md,
    marginBottom: sizes.xxs
  }
});
