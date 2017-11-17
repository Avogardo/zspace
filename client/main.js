import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Main from '../imports/components/Main';

const App = () => (
  <MuiThemeProvider>
    <Main />
  </MuiThemeProvider>
);

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
