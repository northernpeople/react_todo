import React, { Component } from 'react';
import {TodoList, TodoForm} from "../Todo"
import {Switch, Route, Link, NavLink, withRouter} from "react-router-dom";
import {Todo} from "../../../model";


let TodoDetails = (props) => (
  <div>
    {JSON.stringify(props.repo.findById(props.match.params.id))}
  </div>
)

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
        <Link style={{margin: '5px'}} to="/list/all">all</Link>
        <Link style={{margin: '5px'}} to="/list/new">new</Link>
        <Switch>
          <Route path="/list/all"
            render={props =>(
              <TodoList {...props} todos={this.repo.getAll()} delete={this.delete}/>
          )}/>
          <Route path="/list/new" render={props => (<TodoForm {...props} addTodo={this.addTodo}/>)} />

          <Route path="/list/:id" render={props =>(
                <TodoDetails {...props} repo={this.repo}  /> )} />
        </Switch>
      </div>
    )
  }
}

export default TodoManager;