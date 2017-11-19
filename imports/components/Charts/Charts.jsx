import React, { Component, PropTypes } from 'react';
import { Line } from 'react-chartjs-2';
import { CircularProgress } from 'material-ui';

class Charts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { chartData } = this.props;

    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Temperatura',
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#C5CAE9',
          borderColor: '#C62828',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#B71C1C',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#C62828',
          pointHoverBorderColor: '#B71C1C',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    };

    return (
      <div className="tile shadow chart">
        {chartData ?
          <Line data={data} />
          :
          <CircularProgress/>
        }
      </div>
    );
  }
}

export default Charts;
