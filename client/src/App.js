import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TabPanel from './navigation/TabPanel'
import theme from './theme'

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <TabPanel />
          <div className="App">
            {/* <Switch>
            <Route exact path='/' component={Landing} />
          </Switch> */}
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}