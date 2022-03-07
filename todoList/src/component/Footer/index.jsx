import React, { Component } from "react";
import "./index.css";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked);
  }

  handleClearAllDone = () => {
    this.props.clearAllDone();
  }

  render() {
    const {todos} = this.props;
    const doneCount = todos.reduce((pre, currTodo) => pre + (currTodo.done?1:0), 0);
    const total = todos.length;
    return (
      <div>
        <div className="todo-footer">
          <label>
            {/* checked必须要绑定change函数，但是defaultChecked只能保证第一次可以更新，之后在改变不会更新显示 */}
            <input type="checkbox" checked={doneCount === total && total !== 0 ? true : false} onChange={this.handleCheckAll}/>
          </label>
          <span>
            <span>已完成{doneCount}</span> / 全部{total}
          </span>
          <button className="btn btn-danger" onClick={this.handleClearAllDone}>清除已完成任务</button>
        </div>
      </div>
    );
  }
}

export default Header;
