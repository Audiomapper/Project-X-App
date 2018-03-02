import React, { Component } from 'react';
import { withApollo, compose } from 'react-apollo';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import TextInput from '~/components/Shared/Form/TextInput';
import Button from '~/components/Shared/Button/Button';
import { password, required, maxLength, email } from '~/utils/forms/validation/fieldValidation';
import { signIn } from '~/utils/authorizationToken';
import helpers from '~/styles/helpers';

export class RegisterForm extends Component {
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

    return this.props.register(values)
      .then((result) => {
        this.setState({
          isPostingData: false
        });
        if (result) {
          signIn(result.data.signup.token);
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
          name="firstName"
          label="FIRST NAME"
          placeholder="Enter your first name"
          validate={[
            required('First name'),
            maxLength('First name')
          ]}
        />
        <Field
          component={TextInput}
          name="lastName"
          label="LAST NAME"
          placeholder="Enter your last name"
          validate={[
            required('Last name'),
            maxLength('Last name')
          ]}
        />
        <Field
          component={TextInput}
          name="email"
          label="EMAIL ADDRESS"
          placeholder="Enter your email address"
          validate={[
            required('Email'),
            maxLength('Email'),
            email
          ]}
        />
        <Field
          component={TextInput}
          style={helpers.marginBottom}
          name="password"
          label="PASSWORD"
          placeholder="Enter your password"
          validate={password}
        />
        <Button
          onPress={handleSubmit(this.submitForm)}
          primary
          loading={this.state.isPostingData}
          letterSpacing={2}>
          REGISTER
        </Button>
      </View>
    );
  }
}

RegisterForm.propTypes = {
  navigation: PropTypes.object,
  register: PropTypes.func,
  handleSubmit: PropTypes.func
};

const withReduxForm = reduxForm({
  form: 'loginForm',
  enableReinitialize: true
});

export default compose(
  withApollo,
  withReduxForm
)(RegisterForm);
