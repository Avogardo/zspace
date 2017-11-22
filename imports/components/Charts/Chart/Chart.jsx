import React, { Component, PropTypes } from 'react';
import { Line } from 'react-chartjs-2';
import { CircularProgress } from 'material-ui';


class Chart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { chartData, data } = this.props;

    return ( <div>
        {chartData ?
          <Line data={data} />
          :
          <CircularProgress/>
        }
      </div>
    );
  }
}

export default Chart;
