import React, { Component, PropTypes } from 'react';
import { Line } from 'react-chartjs-2';
import { CircularProgress, Snackbar } from 'material-ui';
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
    this.handleRequestClose = this.handleRequestClose.bind(this);

    this.state = {
      openSnackBar: false,
    };
  }

  removeChart() {
    const { config, updateCharts } = this.props;
    const chartsConfigs = JSON.parse(localStorage.getItem('charts-configs'));

    const newConfigs = chartsConfigs.filter(item => item.id !== config.id);
    localStorage.setItem('charts-configs', JSON.stringify(newConfigs));

    this.setState({
      openSnackBar: true,
    });

    updateCharts();
  }

  handleRequestClose() {
    this.setState({
      openSnackBar: false,
    });
  };

  render() {
    const { data } = this.props;
    const { openSnackBar } = this.state;

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

        <Snackbar
          open={openSnackBar}
          message="Usunięto wykres!"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

export default Chart;
