import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import RegisterFormComponent from './RegisterForm';

const REGISTER_MUTATION = gql`mutation SignUp($user: SignUpInput!) {
  signup(user: $user) {
    id
    firstName
    lastName
    email
    token
  }
}`;

const withRegisterMutation = graphql(REGISTER_MUTATION, {
  props: ({ mutate }) => ({
    register: user => (
      mutate({
        variables: {
          user
        }
      }).then(response => (
        response
      )).catch((error) => {
        console.log(error);
      })
    )
  })
});

export default compose(
  withRegisterMutation
)(RegisterFormComponent);
