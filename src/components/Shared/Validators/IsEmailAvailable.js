import gql from 'graphql-tag';
import get from 'lodash.get';
import isEmail from 'validator/lib/isEmail';

export const query = gql`
  query isEmailAvailable($email: String!) {
    asyncValidation {
      isEmailAvailable(email: $email)
    }
  }
`;

const isEmailAvailable = (value, apolloClient) => {

  if (!isEmail(value)) {
    return new Promise(resolve => resolve({
      email: 'Not valid email'
    }));
  }

  return apolloClient.query({
    query,
    fetchPolicy: 'network-only',
    variables: {
      email: value
    }
  }).then(({ data }) => {
    const valid = get(data, 'asyncValidation.isEmailAvailable', false);
    return valid ? {} : { email: 'A user with this email address already exists. Please enter another email address.' };
  }).catch((error) => {
    throw error;
  });

};

export default isEmailAvailable;
