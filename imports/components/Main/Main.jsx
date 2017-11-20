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

  getChartsConfigs() {
    const chartsConfigs = JSON.parse(localStorage.getItem('charts-configs'));

    if (!chartsConfigs) {
      const newChartsConfigs = [1, 2, 3];

      localStorage.setItem('charts-configs', JSON.stringify(newChartsConfigs));
      return newChartsConfigs;
    }

    return chartsConfigs;
  }

  render() {
    return (
      <div>
        <AppBarComponent
          openDialog={this.openDialog}
          updateCharts={() => this.refresh()}
        />

      <div>
        <Charts chartsConfigs={this.getChartsConfigs()} />
      </div>
      </div>
    );
  }
}

export default Main;
