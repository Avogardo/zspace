import React, { Component, PropTypes } from 'react';
import { Chart } from 'react-google-charts';

import AppBarComponent from './AppBarComponent';
import RoomPicker from './RoomPicker';


class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { chartData } = this.props;

    return (
      <div>
        <AppBarComponent />

        <div className="room-picker-wrapper shadow">
          <RoomPicker />
        </div>

          <Chart
            chartType="AreaChart"
            data={chartData}
            options={{}}
            graph_id="ScatterChart"
            width="100%"
            height="400px"
            legend_toggle
          />
      </div>
    );
  }
}

export default Main;
