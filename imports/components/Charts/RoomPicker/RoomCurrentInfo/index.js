import { FullPageLoader } from '/imports/components/Loaders';
import { compose, composeWithTracker  } from 'react-komposer';

import { actions as sensorsActions } from '/imports/api/sensorsData';
import { helpers as sensorsHelpers } from '/imports/api/sensorsData';

import RoomCurrentInfo from './RoomCurrentInfo.jsx';


const composer = ({ floors }, onData) => {
  const roomId = window.location.pathname.replace('/', '');
  const rooms = [];

  floors.forEach(floor => {
    floor.rooms.forEach(room => {
      rooms.push(room);
    });
  });

  const room = rooms.find(room => room.id === roomId);

  sensorsActions.getCurrent(room.tSensor).then(result => {
    const values = result.data.results[0].series[0].values;
    const temperature = Array.isArray(values) ? values[values.length - 1][1] : values[1];

    sensorsActions.getCurrent(room.hSensor).then(result2 => {
      const values2 = result2.data.results[0].series[0].values;
      const humidity = Array.isArray(values2) ? values2[values2.length - 1][1] : values2[1];

      onData(null, {
        name: room.name,
        temperature,
        humidity,
      });
    }).catch(error2 => {
      console.log(error2);
    });

    onData(null, {

    });
  }).catch(error => {
    console.log(error);
  });

  onData(null, {

  });
};

export default compose(
  composer,
  FullPageLoader,
)(RoomCurrentInfo);
