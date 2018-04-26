import React, { Component } from 'react';
import {Navigation, Body} from "./Components/Layout";
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';


let style = {
  paper: { padding: 20, margin: 20},
  root: { flexGrow: 1 },
}


class App extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper style={style.paper}>
              <Body/>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
