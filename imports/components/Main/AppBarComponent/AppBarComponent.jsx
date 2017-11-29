import React, { Component } from 'react';
import Menu from '/imports/components/Menu';
import MenuDialog from '/imports/components/Menu/MenuDialog';
import AddChartDialog from '/imports/components/Menu/AddChartDialog';

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

    const color = 'rgb(255, 255, 255)'
    const menuItems = [{
      name: 'Nowy wykres',
      action: this.openAddDialog,
    }, {
      name: 'Tryb edycji',
      action: () => {console.log('test')},
    }, {
      name: 'Import z grafany',
      action: () => {console.log('test3')},
    }, {
      name: 'Ustawienia',
      action: this.openDialog,
    }];

    return (
      <div>
        <AppBar
          title="System wizualizacji"
          showMenuIconButton={false}
          iconElementRight={
            <Menu
              color={color}
              menuItems={menuItems}
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
