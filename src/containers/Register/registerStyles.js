import {
  StyleSheet
} from 'react-native';

import { sizes } from '../../styles/variables';

export default StyleSheet.create({
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
    width: 70,
    height: 79,
    marginBottom: sizes.sm
  },
  facebook: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
  google: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  }
});
