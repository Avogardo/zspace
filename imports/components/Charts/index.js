import { FullPageLoader } from '/imports/components/Loaders';
import { compose, composeWithTracker  } from 'react-komposer';

import { actions as sensorsActions } from '/imports/api/sensorsData';
import { helpers as sensorsHelpers } from '/imports/api/sensorsData';

import Charts from './Charts.jsx';

const composer = (props, onData) => {
  const credentials = JSON.parse(localStorage.getItem('credentials'));
  const graphanaName = credentials ? credentials.graphanaName : '';
  const baseUrl = `https://${graphanaName}.grafana.net/api/datasources/proxy/4/query?`;

  let api = '';
  if (props.option) {
    api = {
      getTestData: `${baseUrl}db=pomiary_test&q=SELECT "value" FROM "pomiary_test" WHERE ("sensor" = 'H11') AND time >= 1511002183104ms and time <= 1511018311332ms&epoch=ms`,
    }
  } else {
    api = {
      getTestData: `${baseUrl}db=pomiary_test&q=SELECT "value" FROM "pomiary_test" WHERE ("sensor" = 'H11') AND time >= 1510995492588ms and time <= 1511042720183ms&epoch=ms`,
    }
  }

  sensorsActions.get(api.getTestData).then(result => {
      const chartData = sensorsHelpers.toChartData(result.data.results[0].series[0]);
      console.log(chartData);
      onData(null, {
        chartData,
      });
  }).catch(error => {
      console.log(error);
  })

  onData(null, {
    chartData: null
  });
};

export default compose(
  composer,
  FullPageLoader,
)(Charts);
