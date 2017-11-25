import React, { Component } from 'react';
import {
  FlatButton,
  Dialog,
  TextField,
  Snackbar,
  Checkbox,
  DatePicker,
  Toggle,
} from 'material-ui';
import floors from '/imports/components/Charts/RoomPicker/floors.js';


const styles = {
  checkbox: {
    marginTop: 12,
  },
};

class AddChartDialog extends Component {
  constructor(props) {
    super(props);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.updateCheck = this.updateCheck.bind(this);
    this.changeToggle = this.changeToggle.bind(this);
    this.changeSensorToggle = this.changeSensorToggle.bind(this);

    this.changeStartDate = this.changeStartDate.bind(this);
    this.changeEndDate = this.changeEndDate.bind(this);
    this.changePeriod = this.changePeriod.bind(this);

    const credentials = JSON.parse(localStorage.getItem('credentials'));

    this.state = {
      periodError: '',
      openSnackBar: false,
      isLive: true,
      isLongTile: false,
      isTemparature: true,
      period: new Date(),
      startDate: new Date(),
      endDate: new Date(),
    };
  }

  onSubmit(e) {
    e.preventDefault();
    const { refreshCharts, onClose } = this.props;
    const {
      period,
      isLive,
      isLongTile,
      isTemparature,
    } = this.state;
    const roomId = window.location.pathname;
    const floor = floors.find(floor => 
      floor.rooms.find(room => 
        room.id === roomId.replace('/', '')
      )
    );
    const room = floor.rooms.find(room => 
      room.id === roomId.replace('/', '')
    )
    const className = isLongTile ? 'long-tile' : 'tile';
    const sensor = isTemparature ? room.tSensor : room.hSensor;
    const title = isTemparature ? 'Temperatura' : 'Wilgotność';

    if (!period) {
      this.setState({
        periodError: 'This field is required',
      });
    } else {
      this.setState({
        periodError: '',
      });
    }

    const newWidget = {
      roomId: room.id,
      name: room.name,
      title,
      sensor,
      query: `db=pomiary_test&q=SELECT "value" FROM "pomiary_test" WHERE ("sensor" = '${sensor}') AND time >= `,
      className,
      isLive,
      period: 86400000,
    }
    console.log(newWidget);

    this.setState({
      openSnackBar: true,
    });

    // localStorage.setItem('credentials', JSON.stringify(credentials));

    refreshCharts();
    onClose();
  }

  onClose(e) {
    const { onClose } = this.props;

    this.setState({
      periodError: '',
      isLive: false,
    });

    onClose();
  }

  handleRequestClose() {
    this.setState({
      openSnackBar: false,
    });
  };

  updateCheck() {
    this.setState((oldState) => {
      return {
        isLive: !oldState.isLive,
      };
    });
  }

  changeToggle() {
    this.setState((oldState) => {
      return {
        isLongTile: !oldState.isLongTile,
      };
    });
  }

  changeSensorToggle() {
    this.setState((oldState) => {
      return {
        isTemparature: !oldState.isTemparature,
      };
    });
  }

  changeStartDate(event, date) {
    this.setState({
      startDate: date,
    });
  }

  changeEndDate(event, date) {
    this.setState({
      endDate: date,
    });
  }

  changePeriod(event, date) {
    this.setState({
      period: date,
    });
  }

  render() {
    const { open } = this.props;
    const {
      periodError,
      openSnackBar,
      isLive,
      isLongTile,
      isTemparature,
    } = this.state;

    const actions = [
      <FlatButton
        label="Anuluj"
        onTouchTap={e => this.onClose(e)}
      />,
      <FlatButton
        label="Zapisz"
        primary
        onTouchTap={e => this.onSubmit(e)}
      />,
    ];

    return (
      <div>
        <Dialog
          title="Stwórz wykres"
          actions={actions}
          open={open}
          onRequestClose={() => this.onClose()}
        >
          <Checkbox
            label="Na żywo"
            checked={isLive}
            onCheck={this.updateCheck}
            style={styles.checkbox}
          />
          <div className="toggle">
            <Toggle
              label={isLongTile ? "Duży wykres" : "Mały wykres"}
              labelPosition="right"
              onToggle={this.changeToggle}
            />
          </div>
          <div className="toggle">
            <Toggle
              label={isTemparature ? "Temperatura" : "Wilgotność"}
              labelPosition="right"
              onToggle={this.changeSensorToggle}
            />
          </div>
          {isLive ?
            <DatePicker
              autoOk
              onChange={this.changePeriod}
              floatingLabelText="Okres"
            />
            :
            <div className="form-date-picker">
              <DatePicker
                autoOk
                onChange={this.changeStartDate}
                floatingLabelText="Data początkowa"
              />
              <DatePicker
                autoOk
                onChange={this.changeEndDate}
                floatingLabelText="Data końcowa"
              />
            </div>
          }
        </Dialog>

        <Snackbar
          open={openSnackBar}
          message="Utworzono wykres!"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

export default AddChartDialog;
