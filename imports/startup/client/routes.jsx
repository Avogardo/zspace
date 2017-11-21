import React from 'react';
import { Route } from 'react-router';

import Main from '../../components/Main';
import Charts from '../../components/Main';


const goToDefaultRoom = (nextState, replace) => {
  replace('/piwnica/pralnia');
};

export default (
  <Route path="/">
    <Main />
  </Route>
);
