import React, { Component } from 'react';
import {TodoList, TodoForm, TodoInfo} from "../Todo"
import {Switch, Route, Link, NavLink, withRouter} from "react-router-dom";
import {Todo} from "../../../model";
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';


class TodoManager extends Component{
  constructor(props){
    super(props);
    this.repo = props.repo;
    this.state = { todos: [] }

    this.delete = this.delete.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  componentDidMount(){
    this.setState( {todos: this.repo.getAll()})
  }

  delete(todo){
    this.repo.delete(todo);
    this.setState( {todos: this.repo.getAll()})
  }

  addTodo(description){
    this.repo.save(new Todo(description));
    this.setState( {todos: this.repo.getAll()})
  }

  render(){
    return(
      <div>

      <Toolbar>

          <Link to="/list/all">
            <Button variant="raised">all</Button>
          </Link>
        <Button color="inherit" aria-label="Menu">
          <Link to="/list/new">new</Link>
        </Button>
      </Toolbar>



        <Switch>
          <Route path="/list/all"
            render={props =>(
              <TodoList {...props} todos={this.repo.getAll()} delete={this.delete} repo={this.repo}/>
          )}/>
          <Route path="/list/new" render={props => (<TodoForm {...props} addTodo={this.addTodo}/>)} />

        </Switch>
      </div>
    )
  }
}

export default TodoManager;
