import React, { Component, PropTypes } from 'react';
import { Chart } from 'react-google-charts';
import { FullPageLoader } from '/imports/components/Loaders';

import RoomPicker from './RoomPicker';


class Body extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { chartData } = this.props;

    return (
      <div className="container">
        <div className="tile shadow left-tile">
          <RoomPicker />
        </div>

        <div className="tile shadow">
          {chartData ?
            <Chart
              chartType="AreaChart"
              data={chartData}
              options={{}}
              graph_id="ScatterChart"
              width="90%"
              height="350px"
              legend_toggle
            />
            :
            <FullPageLoader />
          }
        </div>
      </div>
    );
  }
}

export default Body;
