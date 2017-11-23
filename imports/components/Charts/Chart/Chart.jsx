import React, { Component, PropTypes } from 'react';
import { Line } from 'react-chartjs-2';
import { CircularProgress } from 'material-ui';


class Chart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { chartData, data } = this.props;

    return ( <div className="chart-wrapper">
        {chartData ?
          <Line data={data} height={200} options={{ maintainAspectRatio: false }} />
          :
          <CircularProgress/>
        }
      </div>
    );
  }
}

export default Chart;
