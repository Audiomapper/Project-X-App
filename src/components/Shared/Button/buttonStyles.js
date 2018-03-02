import {
  StyleSheet
} from 'react-native';

import {
  sizes,
  colors,
  fontSizes
} from '~/styles/variables';

export default StyleSheet.flatten({
  container: {
    height: (sizes.lg + 4),
    width: '100%',
    borderRadius: (sizes.lg + 4),
    marginBottom: sizes.sm
  },
  noMargin: {
    marginBottom: 0
  },
  button: {
    height: (sizes.lg + 4),
    width: '100%',
    borderRadius: (sizes.lg + 4),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: sizes.sm
  },
  text: {
    color: colors.white,
    fontSize: fontSizes.sm
  },
  primary: {
    backgroundColor: '#43b5b7'
  }
});
