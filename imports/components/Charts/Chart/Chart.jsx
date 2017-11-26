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
  }

  render() {
    const { chartData, data } = this.props;

    const color = 'rgb(0, 0, 0)'
    const menuItems = [{
      name: 'Edytuj',
      action: () => {console.log('test1')},
    }, {
      name: 'Usuń',
      action: () => {console.log('test2')},
    }];

    return ( <div className="chart-wrapper">
        {chartData ?
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
