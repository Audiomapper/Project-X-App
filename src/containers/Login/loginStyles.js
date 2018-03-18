import {
  StyleSheet
} from 'react-native';

import {
  sizes,
  fontSizes
} from '~/styles/variables';

export default StyleSheet.flatten({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#212d3b'
  },
  container: {
    width: '70%'
  },
  logo: {
    alignSelf: 'center',
    width: 110,
    height: 125,
    marginTop: -20,
    marginBottom: (sizes.md + sizes.sm)
  },
  footer: {
    height: 40,
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(18, 28, 35, 0.2)',
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: sizes.sm,
    paddingRight: sizes.sm
  },
  lostPassword: {
    fontSize: fontSizes.small,
    color: '#bbb'
  },
  createAccount: {
    fontSize: fontSizes.small,
    color: '#bbb'
  }
});
