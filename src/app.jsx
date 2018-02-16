import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Deck from './container/deck';

const App = () => (
  <MuiThemeProvider>
    <Deck />
  </MuiThemeProvider>
);

export default App;
