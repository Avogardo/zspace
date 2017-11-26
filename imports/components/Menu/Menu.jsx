import React, { PropTypes } from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


const Menu = ({ color, menuItems }) => (
  <IconMenu
    iconButtonElement={
      <IconButton iconStyle={{color: color}}><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    {showMenuItems(menuItems)}
  </IconMenu>
);

const showMenuItems = menuItems => 
  menuItems.map((item, index) => 
    <MenuItem key={`item${index}Menu${item.name}`} primaryText={item.name} onTouchTap={item.action} />
  )

Menu.muiName = 'IconMenu';

export default Menu;

    // <MenuItem primaryText="Nowy wykres" onTouchTap={openAddDialog} />
    // <MenuItem primaryText="Tryb edycji" onTouchTap={() => {}} />
    // <MenuItem primaryText="Ustawienia" onTouchTap={openDialog} />