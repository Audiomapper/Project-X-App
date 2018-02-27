import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import {
  View
} from 'react-native';

import syncValidation from '../../../utils/forms/validation/syncValidation';
import TextInput from '../../../components/Shared/Form/TextInput';
import Button from '../../../components/Shared/Button/Button';
import { signIn } from '../../../utils/authorizationToken';
import styles from './registerFormStyles';

export class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPostingData: false
    };
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleSubmitForm(values, resetForm, formValues) {
    this.setState({
      isPostingData: true
    });

    return this.props.register(values)
      .then((result) => {
        this.setState({
          isPostingData: false
        });
        resetForm(formValues);
        if (result) {
          signIn(result.data.signup.token);
          this.props.navigation.navigate('Dashboard');
        }
      });
  }

  render() {

    const formValues = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };

    return (
      <Formik
        initialValues={formValues}
        validate={values => syncValidation(values)}
        onSubmit={(values, {
          resetForm
        }) => this.handleSubmitForm(values, resetForm, formValues)}
        render={props => (
          <View>
            <Field
              component={TextInput}
              name="firstName"
              label="FIRST NAME"
              placeholder="Enter your first name"
              changeText={props.setFieldValue}
              blurText={props.setFieldTouched}
            />
            <Field
              component={TextInput}
              name="lastName"
              label="LAST NAME"
              placeholder="Enter your last name"
              changeText={props.setFieldValue}
              blurText={props.setFieldTouched}
            />
            <Field
              component={TextInput}
              name="email"
              label="EMAIL ADDRESS"
              placeholder="Enter your email address"
              changeText={props.setFieldValue}
              blurText={props.setFieldTouched}
            />
            <Field
              component={TextInput}
              style={styles.password}
              name="password"
              label="PASSWORD"
              placeholder="Enter your password"
              changeText={props.setFieldValue}
              blurText={props.setFieldTouched}
            />
            <Button
              onPress={props.handleSubmit}
              primary
              loading={this.state.isPostingData}
              letterSpacing={2}>
              REGISTER
            </Button>
          </View>
        )}
      />
    );
  }
}

RegisterForm.propTypes = {
  navigation: PropTypes.object,
  register: PropTypes.func
};

export default RegisterForm;
