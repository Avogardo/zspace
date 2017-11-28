import React, { Component } from 'react';
import { Tabs, Tab, Divider  } from 'material-ui';
import SwipeableViews from 'react-swipeable-views';

import floors from './floors.js';
import RoomCard from './RoomCard';
import RoomCurrentInfo from './RoomCurrentInfo';


const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

class RoomPicker extends React.Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      slideIndex: 0,
    };
  }

  handleChange(value) {
    this.setState({
      slideIndex: value,
    });
  };

  getFloors() {
    return floors.map((floor, index) =>
      <Tab key={index + 'floor'} label={floor.name} value={index} />
    );
  }

  getRooms() {
    return floors.map((floor, index) =>
      <div key={index + 'room'} style={styles.slide}>
        <RoomCard rooms={floor.rooms} />
      </div>
    );
  }

  render() {
    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          {this.getFloors()}
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          {this.getRooms()}
        </SwipeableViews>
        <Divider />
        <RoomCurrentInfo floors={floors} />
      </div>
    );
  }
}

export default RoomPicker;

// height : 389,75