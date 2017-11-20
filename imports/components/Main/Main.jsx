import React, { Component } from 'react';

import Charts from '../Charts';
import AppBarComponent from './AppBarComponent';
import floors from '../Charts/RoomPicker/floors.js';

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

  getChartsConfigs() {
    const chartsConfigs = JSON.parse(localStorage.getItem('charts-configs'));

    if (!chartsConfigs) {
      const newChartsConfigs = [];
      floors.forEach(floor => {
        floor.rooms.forEach(room => {
          newChartsConfigs.push({
            name: room.name,
            title: 'Temperatura',
            sensor: room.tSensor,
            query: '',
            className: '',
          });

          newChartsConfigs.push({
            name: room.name,
            title: 'Wilgotność',
            sensor: room.hSensor,
            query: '',
            className: '',
          });
        });
      }); //todo move to helper


      localStorage.setItem('charts-configs', JSON.stringify(newChartsConfigs));
      return newChartsConfigs;
    }

    return chartsConfigs;
  }

  render() {
    return (
      <div>
        <AppBarComponent
          openDialog={this.openDialog}
          updateCharts={() => this.refresh()}
        />

      <div>
        <Charts chartsConfigs={this.getChartsConfigs()} />
      </div>
      </div>
    );
  }
}

export default Main;
