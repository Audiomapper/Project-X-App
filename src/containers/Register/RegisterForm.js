import React, { Component } from 'react';

import { Formik, Field } from 'formik';
import {
  View,
  StyleSheet
} from 'react-native';

import { LetterSpacing } from '../../components/Shared/LetterSpacing/LetterSpacing';
import syncValidation from '../../utils/forms/validation/syncValidation';
import TextInput from '../../components/Shared/Form/TextInput';
import Button from '../../components/Shared/Button/Button';
import { signIn } from '../../utils/authorizationToken';
import * as Styles from '../../styles/variables';

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
    }

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
              onChangeText={props.setFieldValue}
              onBlurText={props.setFieldTouched}
            />
            <Field
              component={TextInput}
              name="lastName"
              label="LAST NAME"
              placeholder="Enter your last name"
              onChangeText={props.setFieldValue}
              onBlurText={props.setFieldTouched}
            />
            <Field
              component={TextInput}
              name="email"
              label="EMAIL ADDRESS"
              placeholder="Enter your email address"
              onChangeText={props.setFieldValue}
              onBlurText={props.setFieldTouched}
            />
            <Field
              component={TextInput}
              style={styles.password}
              name="password"
              label="PASSWORD"
              placeholder="Enter your password"
              onChangeText={props.setFieldValue}
              onBlurText={props.setFieldTouched}
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

const styles = StyleSheet.create({
  password: {
    marginBottom: (Styles.sizes.md + Styles.sizes.sm)
  }
});

export default RegisterForm;
