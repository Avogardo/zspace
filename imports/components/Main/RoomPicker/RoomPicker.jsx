import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui';
import SwipeableViews from 'react-swipeable-views';

import floors from './floors.js';

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
        <h2>{floor.rooms[0].name}</h2>
        <p>
          T: {floor.rooms[0].tSensor}, W: {floor.rooms[0].hSensor}
        </p>
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
      </div>
    );
  }
}

export default RoomPicker;