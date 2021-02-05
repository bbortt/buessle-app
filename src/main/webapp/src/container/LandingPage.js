// @flow
import React from 'react';
import type { Element } from 'react';

import NewGameForm from '../component/NewGameForm';

export const LandingPage = (): Element<'div'> => {
  return (
    <div className="LandingPage">
      <NewGameForm />
    </div>
  );
};

export default LandingPage;
