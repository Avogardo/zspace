import { FullPageLoader } from '/imports/components/Loaders';
import { compose, composeWithTracker  } from 'react-komposer';

import { actions as sensorsActions } from '/imports/api/sensorsData';
import { helpers as sensorsHelpers } from '/imports/api/sensorsData';

import Chart from './Chart.jsx';

const composer = ({ config }, onData) => {
  const query = config.query;
  const credentials = JSON.parse(localStorage.getItem('credentials'));
  const graphanaName = credentials ? credentials.graphanaName : '';
  const token = credentials ? credentials.authenticationHeader : '';
  const baseUrl = `https://${graphanaName}.grafana.net/api/datasources/proxy/4/query?`;

  const apiUrl = baseUrl + query;

  sensorsActions.get(baseUrl, config, token).then(result => {
    const chartData = sensorsHelpers.toChartData(result.data.results[0].series[0]);

    const backgroundColor = config.title === 'Temperatura' ? '#EF5350' : '#5C6BC0';
    const borderColor = config.title === 'Temperatura' ? '#C62828' : '#283593';
    const pointBorderColor = config.title === 'Temperatura' ? '#B71C1C' : '#1A237E';
    const pointHoverBackgroundColor = config.title === 'Temperatura' ? '#C62828' : '#283593';
    const pointHoverBorderColor = config.title === 'Temperatura' ? '#B71C1C' : '#1A237E';

    const data = {
      labels: chartData.dates,
      datasets: [
        {
          label: `${config.name}: ${config.title} ${config.isLive ? '[LIVE]' : ''}`,
          fill: false,
          lineTension: 0.1,
          backgroundColor,
          borderColor,
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor,
          pointBackgroundColor: '#fff',
          pointBorderWidth: 0,
          pointHoverRadius: 5,
          pointHoverBackgroundColor,
          pointHoverBorderColor,
          pointHoverBorderWidth: 2,
          pointRadius: 0,
          pointHitRadius: 10,
          data: chartData.values,
        }
      ]
    };

    onData(null, {
      data,
      config,
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
