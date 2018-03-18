import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const CURRENT_USER = gql`query CurrentUser {
  viewer {
    myself {
      id
      firstName
      lastName
      email
    }
  }
}`;

const withUser = fields => (
  graphql(CURRENT_USER, {
    props: ({ ownProps, data: { viewer, loading, error } }) => (
      !viewer ? { loading } : fields({
        ownProps,
        viewer,
        loading,
        error
      })
    )
  })
);

export default withUser;
