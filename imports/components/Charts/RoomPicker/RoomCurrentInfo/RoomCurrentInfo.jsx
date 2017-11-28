import React, { PropTypes } from 'react';
import CircularProgress from 'material-ui/CircularProgress';


const RoomCurrentInfo = ({ name, temperature, humidity }) => (
  <div className="room-current-info-wrapper">
    { name && temperature && humidity ?
      <p>
        <b>[Live] {name}:</b> temperatura: <b>{temperature}°C</b>, wilgotność: <b>{humidity}%</b>
      </p>
      :
      <p>
        <CircularProgress size={20} />
      </p>
    }
  </div>
);

export default RoomCurrentInfo;
