import { FullPageLoader } from '/imports/components/Loaders';
import { compose, composeWithTracker  } from 'react-komposer';

import Body from './Body.jsx';

import { actions as sensorsActions } from '/imports/api/sensorsData';

import { helpers as sensorsHelpers } from '/imports/api/sensorsData';

const composer = (props, onData) => {
  const baseUrl = 'https://avogardo.grafana.net/api/datasources/proxy/4/query?';

  const api = {
    getTestData: `${baseUrl}db=pomiary_test&q=SELECT "value" FROM "pomiary_test" WHERE ("sensor" = 'H11') AND time >= 1462362545566ms and time <= 1462370635902ms&epoch=ms`,
  }
console.log('init');
  sensorsActions.get(api.getTestData).then(result => {
      const chartData = sensorsHelpers.toChartData(result.data.results[0].series[0]);
      onData(null, {
        chartData,
      });
  }).catch(error => {
      console.log(error);
  })

  const date = new Date().getTime()
  console.log(date);
  console.log(new Date(date));
  console.log(new Date(1462365579442));
};

export default compose(
  composer,
  FullPageLoader,
)(Body);
