import React, { Component, PropTypes } from 'react';
import { Line } from 'react-chartjs-2';
import { CircularProgress } from 'material-ui';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Menu from '/imports/components/Menu';


const style = {
  color: 'rgb(0, 0, 0)',
}

class Chart extends Component {
  constructor(props) {
    super(props);
    this.removeChart = this.removeChart.bind(this);
  }

  removeChart() {
    const { config, updateCharts } = this.props;
    const chartsConfigs = JSON.parse(localStorage.getItem('charts-configs'));

    const newConfigs = chartsConfigs.filter(item => item.id !== config.id);
    localStorage.setItem('charts-configs', JSON.stringify(newConfigs));
    updateCharts();

    console.log('removed element:', chartsConfigs.find(item => item.id === config.id));
  }

  render() {
    const { data } = this.props;

    const color = 'rgb(0, 0, 0)'
    const menuItems = [{
      name: 'Edytuj',
      action: () => {console.log('test1')},
    }, {
      name: 'Usuń',
      action: this.removeChart,
    }];

    return ( <div className="chart-wrapper">
        {data ?
          <div className="chart-wrapper">
            <Line data={data} height={200} options={{ maintainAspectRatio: false }} />
            <div className="menu-button">
              <Menu
                color={color}
                menuItems={menuItems}
              />
            </div>
          </div>
          :
          <CircularProgress/>
        }
      </div>
    );
  }
}

export default Chart;
