import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import get from 'lodash.get';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import {
  TextInput,
  View,
  Text
} from 'react-native';

import LetterSpacing from '~/components/Shared/LetterSpacing/LetterSpacing';
import styles from './textInputStyles';

export class EmailInputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPostingData: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlBlur = this.handlBlur.bind(this);
  }

  isEmailAvailable(value) {
    const query = gql`
      query isEmailAvailable($email: String!) {
        asyncValidation {
          isEmailAvailable(email: $email)
        }
      }
    `;

    return this.props.client.query({
      query,
      fetchPolicy: 'network-only',
      variables: {
        email: value
      }
    }).then(({ data }) => {
      const valid = get(data, 'asyncValidation.isEmailAvailable', false);
      if (!valid) {
        this.props.form.setFieldError(
          'email',
          'A user with this email address already exists. Please enter another email address.'
        );
      }
    }).catch((error) => {
      throw error;
    });
  }

  handleChange(name, value) {
    this.props.changeText(name, value);
    if (this.props.asyncCheck) {
      const debounceCheckEmail = debounce(this.isEmailAvailable, 1000);
      return debounceCheckEmail(value);
    }
    return false;
  }

  handlBlur(name, value) {
    this.props.blurText(name, value);
    if (this.props.asyncCheck) {
      const debounceCheckEmail = debounce(this.isEmailAvailable, 1000);
      return debounceCheckEmail(value);
    }
    return false;
  }

  render() {

    const {
      placeholder,
      label,
      style,
      field: {
        value,
        name
      },
      form: {
        errors,
        touched
      }
    } = this.props;

    return (
      <View style={[styles.container, style]}>
        { label &&
          <LetterSpacing
            style={styles.label}
            spacing={2}>
            {label}
          </LetterSpacing>
        }
        <TextInput
          onBlur={values => this.handleBlur(name, values)}
          placeholderTextColor={'#999'}
          onChangeText={values => this.handleChange(name, values)}
          placeholder={placeholder}
          value={value}
        />
        { errors[name] && touched[name] &&
          <Text
            style={styles.error}>
            {errors[name]}
          </Text>
        }
      </View>
    );
  }
}

EmailInputComponent.propTypes = {
  asyncCheck: PropTypes.bool,
  client: PropTypes.object,
  changeText: PropTypes.func,
  blurText: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  style: PropTypes.object,
  field: PropTypes.object,
  form: PropTypes.object
};

export default withApollo(EmailInputComponent);
