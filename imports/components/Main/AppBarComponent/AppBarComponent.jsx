import React, { Component } from 'react';
import Menu from './Menu';
import MenuDialog from './Menu/MenuDialog';
import AddChartDialog from './Menu/AddChartDialog';

import { AppBar } from 'material-ui';


class AppBarComponent extends Component {
  constructor(props) {
    super(props);
    this.openDialog = this.openDialog.bind(this);
    this.openAddDialog = this.openAddDialog.bind(this);
    this.hideDialog = this.hideDialog.bind(this);

    this.state = {
      showMenuDialog: false,
      showAddDialog: false,
    };
  }

  openAddDialog() {
    this.setState({
      showAddDialog: true,
    });
  }

  openDialog() {
    this.setState({
      showMenuDialog: true,
    });
  }

  hideDialog() {
    this.setState({
      showMenuDialog: false,
      showAddDialog: false,
    });
  }

  render() {
    const { updateCharts } = this.props;
    const { showAddDialog, showMenuDialog } = this.state;

    return (
      <div>
        <AppBar
          title="System wizualizacji"
          showMenuIconButton={false}
          iconElementRight={
            <Menu 
              openDialog={this.openDialog}
              openAddDialog={this.openAddDialog}
            />
          }
        />

        <AddChartDialog
          open={showAddDialog}
          onClose={this.hideDialog}
          refreshCharts={updateCharts}
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
