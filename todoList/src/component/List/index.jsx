import React, { Component } from "react";
import PropTypes from 'prop-types';
import Item from "../Item";
import "./index.css";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // props限制
  static propTypes = {
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired
  }

  render() {
    const {todos, updateTodo, deleteTodo} = this.props;
    return (
      <div>
        <ul className="todo-main">
          {
            todos.map(todo => {
              return <Item key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
            })
          }
        </ul>
      </div>
    );
  }
}

export default Header;
