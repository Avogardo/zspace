import { FullPageLoader } from '/imports/components/Loaders';
import { compose, composeWithTracker  } from 'react-komposer';

import { actions as sensorsActions } from '/imports/api/sensorsData';
import { helpers as sensorsHelpers } from '/imports/api/sensorsData';

import Charts from './Charts.jsx';

const composer = ({ chartsConfigs }, onData) => {
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

  const credentials = JSON.parse(localStorage.getItem('credentials'));
  const graphanaName = credentials ? credentials.graphanaName : '';
  const baseUrl = `https://${graphanaName}.grafana.net/api/datasources/proxy/4/query?`;

  let api = '';

    api = {
      getTestData: `${baseUrl}db=pomiary_test&q=SELECT "value" FROM "pomiary_test" WHERE ("sensor" = 'H11') AND time >= 1511002183104ms and time <= 1511018311332ms&epoch=ms`,
    }

  sensorsActions.get(api.getTestData).then(result => {
      const chartData = sensorsHelpers.toChartData(result.data.results[0].series[0]);
      console.log(chartData);
      onData(null, {
        chartData,
        chartsConfigs,
        data,
      });
  }).catch(error => {
      console.log(error);
  })

  onData(null, {
    chartData: null,
    chartsConfigs,
    data,
  });
};

export default compose(
  composer,
  FullPageLoader,
)(Charts);
