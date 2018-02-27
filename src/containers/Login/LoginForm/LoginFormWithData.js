import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import LoginFormComponent from './LoginForm';

const LOGIN_MUTATION = gql`mutation SignIn($user: SignInInput!) {
  signin(user: $user) {
    id
    firstName
    lastName
    email
    token
  }
}`;

const withCreateMutation = graphql(LOGIN_MUTATION, {
  props: ({ mutate }) => ({
    login: user => (
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
  withCreateMutation
)(LoginFormComponent);
