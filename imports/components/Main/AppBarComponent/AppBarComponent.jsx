import React from 'react';
import Menu from './Menu';
import { AppBar } from 'material-ui';


const AppBarComponent = () => (
  <AppBar
    title="System wizualizacji"
    iconElementRight={<Menu />}
  />
);

export default AppBarComponent;
