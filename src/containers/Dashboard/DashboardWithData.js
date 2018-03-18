import { compose } from 'react-apollo';

import withUser from '~/graphql/withUser';
import Dashboard from './Dashboard';

export default compose(
  withUser(({ viewer }) => ({
    currentUser: viewer.myself
  }))
)(Dashboard);
