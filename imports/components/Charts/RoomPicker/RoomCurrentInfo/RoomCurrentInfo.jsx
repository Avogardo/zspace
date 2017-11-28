import React, { PropTypes } from 'react';
import CircularProgress from 'material-ui/CircularProgress';


const RoomCurrentInfo = ({ name, temperature, humidity }) => (
  <div className="room-current-info-wrapper">
    { name && temperature && humidity ?
      <p>
        <b>{name}:</b> temperatura: <b>{temperature}°C</b>, wilgotność: <b>{humidity}%</b>
      </p>
      :
      <div className="circular-progress-wrapper">
        <CircularProgress size={20} />
      </div>
    }
  </div>
);

export default RoomCurrentInfo;
