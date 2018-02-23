import React, { Component } from 'react';

import { withFormik, Field } from 'formik';
import {
  View,
  StyleSheet
} from 'react-native';

import syncValidation from '../../utils/forms/validation/syncValidation';
import TextInput from '../../components/Shared/Form/TextInput';
import Button from '../../components/Shared/Button/Button';
import { signIn } from '../../utils/authorizationToken';
import * as Styles from '../../styles/variables';

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPostingData: false,
    };
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm() {
    this.setState({
      isPostingData: true
    });

    return this.props.login(this.props.values)
    .then((result) => {
      this.setState({
        isPostingData: false
      });
      this.props.resetForm(this.props.initialValues);
      if (result) {
        signIn(result.data.signin.token);
        this.props.navigation.navigate('Dashboard');
      }
    });
  }

  render() {

    const {
      setFieldValue,
      setFieldTouched,
      handleSubmit,
      style,
      isValid,
      values,
      ...otherProps
    } = this.props;

    return (
      <View style={style}>
        <Field
          component={TextInput}
          name="email"
          placeholder="Email address"
          onChangeText={setFieldValue}
          onBlurText={setFieldTouched}
        />
        <Field
          component={TextInput}
          style={styles.password}
          name="password"
          placeholder="Password"
          onChangeText={setFieldValue}
          onBlurText={setFieldTouched}
        />
        <Button
          onPress={this.submitForm}
          primary
          loading={this.state.isPostingData}
          disabled={!isValid}
          letterSpacing={2}>
          SIGN IN
        </Button>
      </View>
    );
  }
}

const LoginForm = withFormik({
  mapPropsToValues: () => ({ email: '', password: '' }),
  validate: (values) => syncValidation(values),
  displayName: 'LoginForm',
})(Form);

const styles = StyleSheet.create({
  password: {
    marginBottom: Styles.sizes.lg
  }
});

export default LoginForm;
