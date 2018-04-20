import React, { Component } from 'react';
import {Switch, Route, Link, NavLink, withRouter} from "react-router-dom";
import TodoList from "./todos/TodoList";
import {TodoRepo} from "../model/TodoRepo";
import TodoManager from "./todos/TodoManager"


let active = { color: "red"};
let defaultS = {margin: "5px"};

let todoRepo = new TodoRepo();

let Navigation = () => (
  <div>
    <NavLink exact activeStyle={active} style={defaultS} to="/list">List</NavLink>
    <NavLink exact activeStyle={active} style={defaultS} to="/about">about</NavLink>
    <hr/>
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

let About = () => (<h1> Its all about react </h1>);

let Footer = () => (<div> <hr/> Thank you for your visit. </div> );




export {Footer, Navigation, Body};
