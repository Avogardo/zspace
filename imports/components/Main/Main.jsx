import React, { PropTypes } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


class Main extends TrackerReact(React.Component) {
  constructor(props) {
    super(props);
  }

  render() {
    return (<h1>hellow</h1>
    );
  }
}

export default Main;
