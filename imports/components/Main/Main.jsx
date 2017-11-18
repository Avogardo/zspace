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

        <div className="container">
          <div className="tile shadow left-tile">
            <RoomPicker />
          </div>

          <div className="tile shadow">
            <Chart
              chartType="AreaChart"
              data={chartData}
              options={{}}
              graph_id="ScatterChart"
              width="90%"
              height="350px"
              legend_toggle
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
