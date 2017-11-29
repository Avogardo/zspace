import React, { Component, PropTypes } from 'react';
import { Line } from 'react-chartjs-2';
import { CircularProgress, Divider } from 'material-ui';

import RoomPicker from './RoomPicker';
import Chart from './Chart';
import RoomCurrentInfo from './RoomPicker/RoomCurrentInfo';


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
        <div className="shadow left-tile">
          <RoomPicker />
          <div>
          <Divider />
          <RoomCurrentInfo />
          </div>
        </div>

        {this.createCharts()}
      </div>
    );
  }
}

export default Charts;
