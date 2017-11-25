import React, { PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


const Menu = ({ openDialog, openAddDialog }) => (
  <IconMenu
    iconButtonElement={
      <IconButton iconStyle={{color: 'rgb(255, 255, 255)'}}><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Nowy wykres" onTouchTap={openAddDialog} />
    <MenuItem primaryText="Ustawienia" onTouchTap={openDialog} />
  </IconMenu>
);

Menu.muiName = 'IconMenu';

export default Menu;
