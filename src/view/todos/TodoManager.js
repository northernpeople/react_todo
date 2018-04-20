import React, { Component } from 'react';
import TodoList from "./TodoList"
import TodoForm from "./TodoForm"
import {Todo} from "../../model/Todo";


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
          <TodoList todos={this.repo.getAll()} delete={this.delete} />
          <TodoForm addTodo={this.addTodo} />
      </div>
    )
  }
}

export default TodoManager;
