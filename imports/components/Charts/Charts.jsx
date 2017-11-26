import React, { Component, PropTypes } from 'react';
import { Line } from 'react-chartjs-2';
import { CircularProgress } from 'material-ui';

import RoomPicker from './RoomPicker';
import Chart from './Chart';

class Charts extends Component {
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

  createCharts() {
    const { roomId } = this.props;

    const charts = JSON.parse(localStorage.getItem('charts-configs'));
    const chartsConfigs = charts.filter(config => config.roomId === roomId);

    return chartsConfigs.map((config, index) =>
        <div key={index + 'chart'} className={`${config.className} shadow chart`}>
          <Chart config={config} updateCharts={() => this.refresh()} />
        </div>
    );
  }

  render() {
    return (<div className="container">
        <div className="tile shadow left-tile">
          <RoomPicker />
        </div>

        {this.createCharts()}
      </div>
    );
  }
}

export default Charts;
