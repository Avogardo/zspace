import React, { Component } from 'react';
import {
  FlatButton,
  Dialog,
  TextField,
  Snackbar,
} from 'material-ui';


class MenuDialog extends Component {
  constructor(props) {
    super(props);

    this.handleRequestClose = this.handleRequestClose.bind(this);

    const credentials = JSON.parse(localStorage.getItem('credentials'));
    const graphanaName = credentials ? credentials.graphanaName : '';
    const authenticationHeader = credentials ? credentials.authenticationHeader : '';

    this.state = {
      graphanaName,
      authenticationHeader,
      graphanaNameError: '',
      authenticationHeaderError: '',
      openSnackBar: false,
    };
  }

  onSubmit(e) {
    e.preventDefault();
    const { refreshCharts, onClose } = this.props;
    const { graphanaName, authenticationHeader } = this.state;

    if (!graphanaName) {
      this.setState({
        graphanaNameError: 'This field is required',
      });
    } else {
      this.setState({
        graphanaNameError: '',
      });
    }
    if (!authenticationHeader) {
      this.setState({
        authenticationHeaderError: 'This field is required',
      });
    } else {
      this.setState({
        authenticationHeaderError: '',
      });
    }

    if (authenticationHeader && graphanaName) {
      const credentials = {
        graphanaName,
        authenticationHeader,
      }

      this.setState({
        openSnackBar: true,
      });

      localStorage.setItem('credentials', JSON.stringify(credentials));

      refreshCharts();
      onClose();
    }
  }

  onClose(e) {
    const { onClose } = this.props;

    this.setState({
      graphanaNameError: '',
      authenticationHeaderError: '',
    });

    onClose();
  }

  onChangeName(e) {
    this.setState({
      graphanaName: e.target.value,
    });
  }

  onChangeHeader(e) {
    this.setState({
      authenticationHeader: e.target.value,
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
      graphanaName,
      authenticationHeader,
      graphanaNameError,
      authenticationHeaderError,
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
          title="Ustawienia"
          actions={actions}
          open={open}
          onRequestClose={() => this.onClose()}
        >
          <TextField
            floatingLabelText="Nickname z graphany"
            value={graphanaName}
            errorText={graphanaNameError}
            onChange={e => this.onChangeName(e)}
          />
          <TextField
            floatingLabelText="Token"
            value={authenticationHeader}
            errorText={authenticationHeaderError}
            onChange={e => this.onChangeHeader(e)}
          />
        </Dialog>

        <Snackbar
          open={openSnackBar}
          message="Zapisano zmiany!"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

export default MenuDialog;
