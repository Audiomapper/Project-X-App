import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import FacebookLoginComponent from './FacebookLogin';

const FACEBOOK_LOGIN_MUTATION = gql`mutation FacebookLogIn($accessToken: String!) {
  facebookLogIn(accessToken: $accessToken)
}`;

const withFacebookLogInMutation = graphql(FACEBOOK_LOGIN_MUTATION, {
  props: ({ mutate }) => ({
    loginWithFacebook: accessToken => (
      mutate({
        variables: {
          accessToken
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
  withFacebookLogInMutation
)(FacebookLoginComponent);
