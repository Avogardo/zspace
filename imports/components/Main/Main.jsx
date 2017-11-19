import React, { Component } from 'react';

import Body from '../Body';
import AppBarComponent from './AppBarComponent';
import MenuDialog from './AppBarComponent/Menu/MenuDialog';


class Main extends Component {
  constructor(props) {
    super(props);
    this.openDialog = this.openDialog.bind(this);
    this.hideDialog = this.hideDialog.bind(this);

    this.state = {
      showMenuDialog: false,
    };
  }

  openDialog() {
    this.setState({
      showMenuDialog: true,
    });
  }

  hideDialog() {
    this.setState({
      showMenuDialog: false,
    });
  }

  render() {
    const { showMenuDialog } = this.state;

    return (
      <div>
        <AppBarComponent openDialog={this.openDialog} />

        <Body />

        <MenuDialog
          open={showMenuDialog}
          onClose={this.hideDialog}
        />
      </div>
    );
  }
}

export default Main;
