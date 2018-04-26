import React, { Component } from 'react';
import {Switch, Route, Link, NavLink, withRouter} from "react-router-dom";
import {TodoRepo} from "../../../model"
import {TodoList, TodoManager} from "../Todo";
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';



let todoRepo = new TodoRepo();

let style = {
  paper: { padding: 20, margin: 20},
  root: { flexGrow: 1 },
}


let Navigation = () => (

      <div className={style.root}>
        <AppBar position="static">
          <Toolbar>
            <NavLink exact to="/list">
              <Button color="inherit" variant="raised" color="primary">
                todos
              </Button>
            </NavLink>
            <NavLink exact to="/about">
              <Button color="inherit" variant="raised" color="primary">
                about
              </Button>
            </NavLink>
          </Toolbar>
        </AppBar>
      </div>


);

let Body = () => (
  <Switch>
    <Route path="/list"
      render={props =>( <TodoManager {...props} repo={todoRepo} /> )}
    />
    <Route path="/about" component={About} />
  </Switch>
);

let About = () => (

    <fragment>
            <Typography variant="headline" component="h3">
              This is a sheet of paper.
            </Typography>
            <Typography component="p">
              Paper can be used to build surface or other elements for your application.
            </Typography>

    </fragment>

);



export { Navigation, Body};
