import React from 'react';

import Body from '../Body';
import AppBarComponent from './AppBarComponent';


const Main = () => (
  <div>
    <AppBarComponent openDialog={this.openDialog} />

    <Body />
  </div>
);

export default Main;
