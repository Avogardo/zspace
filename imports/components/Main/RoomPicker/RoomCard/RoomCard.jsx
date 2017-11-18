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


const RoomCard = ({ rooms }) => (
 <div className="map-wrapper">
    <table>
      <tbody>
        <tr>
          <td><div className="placeholder laundry-class"><img src={rooms[0].image} /></div></td>
          <td><div className="placeholder"></div></td>
          <td></td>
        </tr>
        <tr>
          <td>
            <div className="placeholder"></div>
          </td>
          <td>
            <div className="placeholder"></div>
          </td>
          <td>
            <div className="placeholder"></div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default RoomCard;
