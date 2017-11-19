import React, { Component } from 'react';

import Body from '../Body';
import AppBarComponent from './AppBarComponent';


  class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      refresh: false,
    };
  }

  refresh() {
    this.setState({
      refresh: true,
    });
  }

  render() {
    return (
      <div>
        <AppBarComponent
          openDialog={this.openDialog}
          updateBody={() => this.refresh()}
        />

        <Body />
      </div>
    );
  }
}

export default Main;
