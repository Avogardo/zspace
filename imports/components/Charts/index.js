import { FullPageLoader } from '/imports/components/Loaders';
import { compose, composeWithTracker  } from 'react-komposer';

import { actions as sensorsActions } from '/imports/api/sensorsData';
import { helpers as sensorsHelpers } from '/imports/api/sensorsData';

import Charts from './Charts.jsx';

const composer = (props, onData) => {
  if (props.match) {
    if (props.match.params.hasOwnProperty('roomId')) {
      const { roomId } = props.match.params;

      const charts = JSON.parse(localStorage.getItem('charts-configs'));
      const chartsConfigs = charts.filter(config => config.roomId === roomId);

      onData(null, {
        chartsConfigs,
      });
    }
  }
};

export default compose(
  composer,
  FullPageLoader,
)(Charts);
