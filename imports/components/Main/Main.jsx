import React, { Component } from 'react';

import Charts from '../Charts';
import AppBarComponent from './AppBarComponent';
import RoomPicker from './RoomPicker';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      refresh: false,
    };
  }

  refresh() {
    this.setState({
      refresh: true,
    });
  }

  render() {
    return (
      <div>
        <AppBarComponent
          openDialog={this.openDialog}
          updateCharts={() => this.refresh()}
        />

      <div className="container">
        <div className="tile shadow left-tile">
          <RoomPicker />
        </div>

        <Charts />
      </div>
      </div>
    );
  }
}

export default Main;
