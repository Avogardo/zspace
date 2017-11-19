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

    const credentials = JSON.parse(localStorage.getItem('credentials'));

    const graphanaName = credentials ? credentials.graphanaName : '';
    const authenticationHeader = credentials ? credentials.authenticationHeader : '';

    this.state = {
      graphanaName,
      authenticationHeader,
      graphanaNameError: '',
      authenticationHeaderError: '',
    };
  }

  onSubmit(e) {
    e.preventDefault();
    const { refreshBody, onClose } = this.props;
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

      localStorage.setItem('credentials', JSON.stringify(credentials));
      const a = JSON.parse(localStorage.getItem('credentials'));
      console.log(a);

      refreshBody();
      onClose();
    }
  }

  onClose(e) {
    const { onClose } = this.props;

    this.setState({
      graphanaName: '',
      authenticationHeader: '',
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

  render() {
    const { open } = this.props;
    const {
      graphanaName,
      authenticationHeader,
      graphanaNameError,
      authenticationHeaderError,
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
            hintText="Nickname z graphany"
            value={graphanaName}
            errorText={graphanaNameError}
            onChange={e => this.onChangeName(e)}
          />
          <TextField
            hintText="Token"
            value={authenticationHeader}
            errorText={authenticationHeaderError}
            onChange={e => this.onChangeHeader(e)}
          />
        </Dialog>
      </div>
    );
  }
}

export default MenuDialog;
