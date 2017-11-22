import { FullPageLoader } from '/imports/components/Loaders';
import { compose, composeWithTracker  } from 'react-komposer';

import { actions as sensorsActions } from '/imports/api/sensorsData';
import { helpers as sensorsHelpers } from '/imports/api/sensorsData';

import Chart from './Chart.jsx';

const composer = ({ config }, onData) => {
  const query = config.query;
  const credentials = JSON.parse(localStorage.getItem('credentials'));
  const graphanaName = credentials ? credentials.graphanaName : '';
  const baseUrl = `https://${graphanaName}.grafana.net/api/datasources/proxy/4/query?`;

  const apiUrl = baseUrl + query;

  sensorsActions.get(apiUrl).then(result => {
    const chartData = sensorsHelpers.toChartData(result.data.results[0].series[0]);
    console.log(chartData);

    const data = {
      labels: chartData.dates,
      datasets: [
        {
          label: config.title,
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#EF5350',
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
          data: chartData.values,
        }
      ]
    };

    onData(null, {
      chartData,
      data,
    });
  }).catch(error => {
      console.log(error);
  })

  onData(null, {

  });
};

export default compose(
  composer,
  FullPageLoader,
)(Chart);
