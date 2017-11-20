import React, { Component, PropTypes } from 'react';
import { Line } from 'react-chartjs-2';
import { CircularProgress } from 'material-ui';

import RoomPicker from './RoomPicker';

class Charts extends Component {
  constructor(props) {
    super(props);
  }

  createCharts() {
    const { chartsConfigs, chartData, data } = this.props;

    return chartsConfigs.map((config, index) =>
        <div key={index + 'chart'} className="tile shadow chart">
          {chartData ?
            <Line data={data} />
            :
            <CircularProgress/>
          }
        </div>
    );
  }

  render() {
    const { chartData } = this.props;

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
