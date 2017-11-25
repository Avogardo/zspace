import React, { Component } from 'react';
import {
  FlatButton,
  Dialog,
  TextField,
  Snackbar,
} from 'material-ui';


class AddChartDialog extends Component {
  constructor(props) {
    super(props);

    this.handleRequestClose = this.handleRequestClose.bind(this);

    const credentials = JSON.parse(localStorage.getItem('credentials'));

    this.state = {
      periodError: '',
      openSnackBar: false,
    };
  }

  onSubmit(e) {
    e.preventDefault();
    const { refreshCharts, onClose } = this.props;
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

  render() {
    const { open } = this.props;
    const {
      periodError,
      openSnackBar,
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
          <TextField
            floatingLabelText="Okres"
            errorText={periodError}
            onChange={e => this.onChangeHeader(e)}
          />
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
