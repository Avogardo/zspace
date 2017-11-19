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
  }

  onSubmit(e) {
    e.preventDefault();

    console.log('submit');
  }

  onClose(e) {
    e.preventDefault();
    const {
      onClose,
    } = this.props;

    onClose();
  }

  render() {
    const { open } = this.props;

    const actions = [
        <FlatButton
          label="Cancel"
          onTouchTap={e => this.onClose(e)}
        />,
        <FlatButton
          label="Add"
          primary
          onTouchTap={e => this.onSubmit(e)}
        />,
    ];

    return (
      <div>
        <Dialog
          title="Options"
          actions={actions}
          open={open}
        >
          <TextField
            hintText="Name"
          />
          <TextField
            hintText="Auth header"
          />
        </Dialog>
      </div>
    );
  }
}

export default MenuDialog;
