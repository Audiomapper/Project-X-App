import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { withApollo, compose } from 'react-apollo';
import {
  View
} from 'react-native';

import TextInput from '~/components/Shared/Form/TextInput';
import Button from '~/components/Shared/Button/Button';
import asyncEmailValidator from '~/components/Shared/Validators/isEmailAvailableAsyncValidator';
import { password } from '~/utils/forms/validation/fieldValidation';
import { signIn } from '~/utils/authorizationToken';
import helpers from '~/styles/helpers';

export class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isPostingData: false
    };
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(values) {
    this.setState({
      isPostingData: true
    });

    return this.props.login(values)
      .then((result) => {
        this.setState({
          isPostingData: false
        });
        if (result) {
          signIn(result.data.signin.token);
          this.props.navigation.navigate('Dashboard');
        }
      });
  }

  render() {

    const {
      handleSubmit
    } = this.props;

    return (
      <View>
        <Field
          component={TextInput}
          name="email"
          label="EMAIL ADDRESS"
          placeholder="Enter your email address"
        />
        <Field
          component={TextInput}
          validate={password}
          autoComplete="off"
          style={helpers.marginBottom}
          name="password"
          label="PASSWORD"
          placeholder="Enter your password"
        />
        <Button
          onPress={handleSubmit(this.submitForm)}
          primary
          loading={this.state.isPostingData}
          letterSpacing={2}>
          LOG IN
        </Button>
      </View>
    );
  }
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
  navigation: PropTypes.object,
  login: PropTypes.func,
};

const withReduxForm = reduxForm({
  form: 'loginForm',
  asyncValidate: asyncEmailValidator,
  asyncBlurFields: ['email'],
  enableReinitialize: true
});

export default compose(
  withApollo,
  withReduxForm
)(LoginForm);
