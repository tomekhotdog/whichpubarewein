import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {blue300, blue500, blue800, pink300, pink500, pink800} from 'material-ui/styles/colors';
import './Styles.css';
import Pub from './pub';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue500,
    primary2Color: blue300,
    primary3Color: blue800,
    accent1Color: pink500,
    accent2Color: pink300,
    accent3Color: pink800,
  },
  appBar: {
  },
});

class App extends Component {

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <div className="App-header">
            <h2>Wilson House Paddington Pub Crawl 2016</h2>
          </div>

          <Pub />

          <div className="App-footer">
            <h2>Which pub are we in?</h2>
          </div>

      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
