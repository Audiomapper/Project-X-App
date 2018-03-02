import { gql } from 'react-apollo';
import get from 'lodash.get';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';

export const query = gql`
  query isEmailAvailable($email: String!) {
    asyncValidation {
      isEmailAvailable(email: $email)
    }
  }
`;

const asyncValidate = (values, dispatch, props) => {

  if (!values.email || isEmpty(values.email)) {
    return new Promise(resolve => resolve({
      email: 'Email is required'
    }));
  }

  if (!isEmail(values.email)) {
    return new Promise(resolve => resolve({
      email: 'Not a valid email address'
    }));
  }

  if (props.initialValues && props.initialValues.email === values.email) {
    return new Promise(resolve => resolve({}));
  }

  return props.client.query({
    query,
    fetchPolicy: 'network-only',
    variables: {
      email: values.email
    }
  }).then(({ data }) => {
    const valid = get(data, 'asyncValidation.isEmailAvailable', false);
    return valid ? {} : { email: 'A user with this email address already exists. Please enter another email address.' };
  }).catch((error) => {
    console.log(error);
    throw error;
  });

};

export default asyncValidate;
