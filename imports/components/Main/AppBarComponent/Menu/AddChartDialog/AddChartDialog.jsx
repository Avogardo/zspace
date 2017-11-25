import React, { Component } from 'react';
import {
  FlatButton,
  Dialog,
  TextField,
  Snackbar,
  Checkbox,
  DatePicker,
} from 'material-ui';


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

    const credentials = JSON.parse(localStorage.getItem('credentials'));

    this.state = {
      periodError: '',
      openSnackBar: false,
      isLive: false,
    };
  }

  onSubmit(e) {
    e.preventDefault();
    const { refreshCharts, onClose, isLive } = this.props;
    const { period } = this.state;

    if (!period) {
      this.setState({
        periodError: 'This field is required',
      });
    } else {
      this.setState({
        periodError: '',
      });
    }

    console.log('submit');

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

  onChangeHeader(e) {
    this.setState({
      period: e.target.value,
    });
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

  render() {
    const { open } = this.props;
    const {
      periodError,
      openSnackBar,
      isLive,
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
          {isLive ?
            <DatePicker
              autoOk
              floatingLabelText="Okres"
            />
            :
            <div className="form-date-picker">
              <DatePicker
                autoOk
                floatingLabelText="Data początkowa"
              />
              <DatePicker
                autoOk
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

            // <TextField
              // floatingLabelText="Okres"
              // errorText={periodError}
              // onChange={e => this.onChangeHeader(e)}
            // />
