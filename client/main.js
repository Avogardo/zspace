import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import * as Colors from 'material-ui/styles/colors';
injectTapEventPlugin();

import Main from '../imports/components/Main';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: Colors.deepPurple800
  },
});

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <Main />
  </MuiThemeProvider>
);

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
