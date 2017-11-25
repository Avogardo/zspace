import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import { FullPageLoader } from '/imports/components/Loaders';
import Charts from '../Charts';
import AppBarComponent from './AppBarComponent';
import floors from '../Charts/RoomPicker/floors.js';
import { Redirect } from 'react-router-dom'

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

  componentWillMount() {
    this.getChartsConfigs();
  }

  getChartsConfigs() {
    const chartsConfigs = JSON.parse(localStorage.getItem('charts-configs'));

    if (!chartsConfigs) {
      const currentDate = new Date();
      const unixTime = currentDate.getTime();

      const newChartsConfigs = [];
      floors.forEach(floor => {
        floor.rooms.forEach(room => {
          newChartsConfigs.push({
            roomId: room.id,
            name: room.name,
            title: 'Temperatura',
            sensor: room.tSensor,
            query: `db=pomiary_test&q=SELECT "value" FROM "pomiary_test" WHERE ("sensor" = '${room.tSensor}') AND time >= `,
            className: 'tile',
            isLive: true,
            period: 86400000,
          });

          newChartsConfigs.push({
            roomId: room.id,
            name: room.name,
            title: 'Wilgotność',
            sensor: room.hSensor,
            query: `db=pomiary_test&q=SELECT "value" FROM "pomiary_test" WHERE ("sensor" = '${room.hSensor}') AND time >= `,
            className: 'long-tile',
            isLive: true,
            period: 99900000,
          });

          // newChartsConfigs.push({
          //   roomId: room.id,
          //   name: room.name,
          //   title: 'Wilgotność',
          //   sensor: room.hSensor,
          //   query: `db=pomiary_test&q=SELECT "value" FROM "pomiary_test" WHERE ("sensor" = '${room.hSensor}') AND time >= 1511400000000ms and time <= ${unixTime}ms&epoch=ms`,
          //   className: 'long-tile',
          //   isLive: false,
          //   period: '',
          // });
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

        <Redirect to="/piwnica-pralnia" push />

        <Switch>
          <Route path='/:roomId' component={Charts}/>
        </Switch>
      </div>
    );
  }
}

export default Main;
