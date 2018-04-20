import React, { Component } from 'react';

class TodoList extends Component{
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <div>
        <h2> Existing todos </h2>
        <ul>
          {this.props.todos.map( (e) => (
          <li key={e.id}>{e.description}
            <button onClick={() => this.props.delete(e)}> Remove {e.description} </button>
          </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default TodoList;
