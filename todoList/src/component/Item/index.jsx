import React, { Component } from "react";
import "./index.css";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouse: false
    };
  }

  // 鼠标移入和移出事件
  handleMouse = (isOn) => {
    return () => {
      this.setState({
        mouse: isOn
      })
    }
  }

  // 选中和取消选中回调事件，必须返回一个函数
  handleChange = (id) => {
    return (event) => {
      this.props.updateTodo(id, event.target.checked);
    }
  }

  // 删除todo回调
  handleDelete = (id) => {
    if(window.confirm('确定删除吗?')) {
      this.props.deleteTodo(id);
    }
  }

  render() {
    const {todo} = this.props;
    const {mouse} = this.state;
    return (
      <div>
        <li style={{backgroundColor: mouse?'#ddd':'#fff'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
          <label>
            <input type="checkbox" checked={todo.done} onChange={this.handleChange(todo.id)}/>
            <span>{todo.name}</span>
          </label>
          <button className="btn btn-danger" onClick={()=> this.handleDelete(todo.id)} style={{ display: mouse?'block':'none' }}>
            删除
          </button>
        </li>
      </div>
    );
  }
}

export default Header;
