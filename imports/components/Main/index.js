import { FullPageLoader } from '/imports/components/Loaders';
import { compose, composeWithTracker  } from 'react-komposer';

import Main from './Main.jsx';

const composer = (props, onData) => {
  onData(null, {

  });
};

export default compose(
  composer,
  FullPageLoader,
)(Main);
