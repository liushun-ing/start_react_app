import React, { Component } from "react";
import PropTypes from 'prop-types';
import {nanoid} from 'nanoid';
import "./index.css";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  // 限制props
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  // 键盘输入事件回调
  handleKeyUp = (event) => {
    if(event.key !== 'Enter') return;
    if(event.target.value.trim() === '') return;
    const newTodo = {
      id: nanoid(),
      name: event.target.value,
      done: false
    }
    this.props.addTodo(newTodo);
    // 清空输入
    event.target.value = '';
  }

  render() {
    return (
      <div>
        <div className="todo-header">
          <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
        </div>
      </div>
    );
  }
}

export default Header;
