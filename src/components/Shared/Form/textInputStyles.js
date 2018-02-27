import {
  StyleSheet
} from 'react-native';

import {
  sizes,
  colors
} from '../../../styles/variables';

export default StyleSheet.create({
  container: {
    marginBottom: sizes.md
  },
  error: {
    color: colors.error,
    marginTop: sizes.xxs
  },
  label: {
    fontSize: 10
  }
});
