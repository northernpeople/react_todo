import React, { Component } from 'react';
import {Switch, Route, Link, NavLink, withRouter} from "react-router-dom";
import Button from 'material-ui/Button';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import {TodoForm, TodoInfo} from "../Todo"



class TodoList extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <h2> Existing todos </h2>

  {this.props.todos.map( (e) => (

        <Card  key={e.id}>
        <CardContent>

          {JSON.stringify(this.props)}

          id: {e.id}
          description: {e.description}

          <TodoInfo
            />


          <Button variant="raised" color="primary" onClick={() => this.props.delete(e)}>
            Remove {e.description}
          </Button>

        </CardContent>
        </Card>

  ))}




      </div>
    )
  }
}

export default TodoList;
