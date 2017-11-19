import React, { Component } from 'react';
import Body from '../Body';
import AppBarComponent from './AppBarComponent';


class Main extends Component {
  constructor(props) {
    super(props);
    this.openDialog = this.openDialog.bind(this);

    this.state = {
      showMenuDialog: false,
    };
  }

  openDialog() {
    this.setState({
      showMenuDialog: true,
    });
  }

  render() {
    return (
      <div>
        <AppBarComponent openDialog={this.openDialog} />

        <Body />
      </div>
    );
  }
}

export default Main;
