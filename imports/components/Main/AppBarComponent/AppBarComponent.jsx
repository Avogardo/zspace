import React from 'react';
import Menu from './Menu';
import { AppBar } from 'material-ui';


const AppBarComponent = ({ openDialog }) => (
  <AppBar
    title="System wizualizacji"
    iconElementRight={<Menu openDialog={openDialog} />}
  />
);

export default AppBarComponent;
