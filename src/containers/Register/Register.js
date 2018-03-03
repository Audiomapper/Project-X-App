import React from 'react';
import PropTypes from 'prop-types';
import {
  ImageBackground,
  View,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Background from '~/images/bg.jpg';
import Button from '~/components/Shared/Button/Button';
import SplitLine from '~/components/Shared/SplitLine/SplitLine';
import { colors } from '~/styles/variables';
import RegisterFormWithData from './RegisterForm/RegisterFormWithData';
import styles from './registerStyles';

const Register = ({
  navigation
}) => (
  <ImageBackground
    source={Background}
    style={styles.background}>
    <View style={styles.container}>
      <Text
        onPress={() => navigation.goBack()}
        style={styles.back}>
        <Icon
          name="ios-arrow-dropleft"
          color="#ffffff"
          size={30} />
      </Text>
      <RegisterFormWithData navigation={navigation} />
      <SplitLine>
        OR
      </SplitLine>
      <Button
        primary
        buttonStyle={styles.facebook}
        highLightColor={colors.facebook}
        onPress={() => console.log('sdsd')}
        letterSpacing={2}>
        LOG IN WITH FACEBOOK
      </Button>
      <Button
        primary
        buttonStyle={styles.google}
        noMargin
        highLightColor={colors.google}
        onPress={() => console.log('sdsd')}
        letterSpacing={2}>
        LOG IN WITH GOOGLE
      </Button>
    </View>
  </ImageBackground>
);

Register.propTypes = {
  navigation: PropTypes.object
};

export default Register;
