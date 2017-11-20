import React from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
  FlatButton,
  GridTile,
} from 'material-ui';


getRoomsTiles = (rooms) => rooms.map(room =>
  <div key={room.name + 'tile'} className="placeholder"><img src={room.image} alt={room.name} /></div>
);

const RoomCard = ({ rooms }) => (
 <div className="map-wrapper">
    {getRoomsTiles(rooms)}
  </div>
);

export default RoomCard;
