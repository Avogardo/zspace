import React from 'react';
import { Link } from 'react-router-dom'


getRoomsTiles = (rooms) => rooms.map(room =>
  <div key={room.name + 'tile'} className="placeholder">
    <Link to={`/${room.id}`}>
      <img src={room.image} alt={room.name} />
    </Link>
  </div>
);

const RoomCard = ({ rooms }) => (
 <div className="map-wrapper">
    {getRoomsTiles(rooms)}
  </div>
);

export default RoomCard;
