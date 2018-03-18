import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import GoogleLoginComponent from './GoogleLogin';

const GOOGLE_LOGIN_MUTATION = gql`mutation GoogleLogIn($user: GoogleSignInInput!) {
  googleLogIn(user: $user)
}`;

const withGoogleLogInMutation = graphql(GOOGLE_LOGIN_MUTATION, {
  props: ({ mutate }) => ({
    loginWithGoogle: user => (
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
  withGoogleLogInMutation
)(GoogleLoginComponent);
