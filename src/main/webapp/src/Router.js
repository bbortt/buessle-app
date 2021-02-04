// @flow
import { Route } from 'react-router-dom';

import LandingPage from './container/LandingPage';

export const Router = () => {
  return (
    <div className="Router">
      <Route path="/" component={LandingPage} />
    </div>
  );
};

export default Router;
