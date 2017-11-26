import { FullPageLoader } from '/imports/components/Loaders';
import { compose, composeWithTracker  } from 'react-komposer';

import Charts from './Charts.jsx';


const composer = (props, onData) => {
  if (props.match) {
    if (props.match.params.hasOwnProperty('roomId')) {
      const { roomId } = props.match.params;

      onData(null, {
        roomId,
      });
    }
  }
};

export default compose(
  composer,
  FullPageLoader,
)(Charts);
