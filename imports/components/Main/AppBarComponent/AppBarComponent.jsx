import React, { Component } from 'react';
import Menu from './Menu';
import MenuDialog from './Menu/MenuDialog';

import { AppBar } from 'material-ui';


class AppBarComponent extends Component {
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
    const { updateCharts } = this.props;
    const { showMenuDialog } = this.state;

    return (
      <div>
        <AppBar
          title="System wizualizacji"
          showMenuIconButton={false}
          iconElementRight={<Menu openDialog={this.openDialog} />}
        />

        <MenuDialog
          open={showMenuDialog}
          onClose={this.hideDialog}
          refreshCharts={updateCharts}
        />
      </div>
    );
  }
}

export default AppBarComponent;
