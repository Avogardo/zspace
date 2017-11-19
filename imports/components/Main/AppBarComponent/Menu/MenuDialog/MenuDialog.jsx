import React, { PropTypes } from 'react';
import {
  FlatButton,
  Dialog,
  TextField,
  DatePicker,
  Snackbar,
  CardText,
} from 'material-ui';


class AddDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleRequestClose = this.handleRequestClose.bind(this);
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
          title="Compose new row"
          actions={actions}
          open={open}
        >
          <TextField
            hintText="Name"
            onChange={e => this.onChangeName(e)}
          />
          <TextField
            hintText="Surname"
            onChange={e => this.onChangeSurname(e)}
          />
        </Dialog>
      </div>
    );
  }
}

AddDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddDialog;
