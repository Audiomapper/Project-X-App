import {
  StyleSheet
} from 'react-native';

import {
  sizes,
  colors,
  fonts
} from '../../../styles/variables';

export default StyleSheet.flatten({
  container: {
    flexDirection: 'row',
    width: '50%',
    marginLeft: '25%',
    marginBottom: sizes.sm
  },
  line: {
    backgroundColor: colors.white,
    height: 1,
    flex: 1,
    alignSelf: 'center'
  },
  text: {
    alignSelf: 'center',
    paddingHorizontal: 5,
    fontSize: fonts.small,
    color: colors.white
  }
});
