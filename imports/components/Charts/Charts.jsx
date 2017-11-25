import React, { Component, PropTypes } from 'react';
import { Line } from 'react-chartjs-2';
import { CircularProgress } from 'material-ui';

import RoomPicker from './RoomPicker';
import Chart from './Chart';

class Charts extends Component {
  constructor(props) {
    super(props);
  }

  createCharts() {
    const { chartsConfigs } = this.props;

    return chartsConfigs.map((config, index) =>
        <div key={index + 'chart'} className={`${config.className} shadow chart`}>
          <Chart config={config} />
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
