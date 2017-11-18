import React, { Component, PropTypes } from 'react';

import AppBarComponent from './AppBarComponent';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
             <AppBarComponent />

            <h1>hellow</h1>

        </div>
    );
  }
}

export default Main;
