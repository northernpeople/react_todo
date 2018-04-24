import React, { Component } from 'react';
import {Switch, Route, Link, NavLink, withRouter} from "react-router-dom";
import Button from 'material-ui/Button';


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

          <li key={e.id}>
            <Link to={`/list/${e.id}`}> {e.description}</Link>
            <Button variant="raised" color="primary" onClick={() => this.props.delete(e)}>
              Remove {e.description}
            </Button>
          </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default TodoList;
