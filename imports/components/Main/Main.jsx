import React, { Component } from 'react';

import Charts from '../Charts';
import AppBarComponent from './AppBarComponent';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      refresh: false,
    };
  }

  refresh() {
    this.setState({
      refresh: true,
    });
  }

  render() {
    const chartsConfigs = [1, 2, 3];

    return (
      <div>
        <AppBarComponent
          openDialog={this.openDialog}
          updateCharts={() => this.refresh()}
        />

      <div>
        <Charts chartsConfigs={chartsConfigs} />
      </div>
      </div>
    );
  }
}

export default Main;
