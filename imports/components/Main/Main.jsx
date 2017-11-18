import React, { Component, PropTypes } from 'react';

import AppBarComponent from './AppBarComponent';
import { Chart } from 'react-google-charts';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { chartData } = this.props;

    return (
      <div>
         <AppBarComponent />

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
