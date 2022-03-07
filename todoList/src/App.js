// 顺序：第三方、自定义组件、样式
import React, { Component } from 'react';
import Header from "./component/Header";
import List from "./component/List";
import Footer from "./component/Footer";
import "./App.css";

export class App extends Component {
  // 状态在哪里，修改状态的方法就在那里，至于修改的值从哪里来，可以从子代组件中，也可以自己中来

  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {id: '001', name: '吃饭', done: true },
        {id: '002', name: '睡觉', done: true },
        {id: '003', name: '敲代码', done: true },
        {id: '004', name: '打王者', done: true },
      ]
    }
  }

  // 添加任务回调
  addTodo = (newTodo) => {
    this.setState({
      todos: [newTodo, ...this.state.todos]
    });
  }

  // 更新任务回调，先传给List,然后传给Item
  updateTodo = (id, done) => {
    const {todos} = this.state;
    const index = todos.findIndex((item) => {
      return item.id === id;
    });
    todos[index].done = done;
    this.setState({
      todos
    });
  }

  deleteTodo = (id) => {
    let {todos} = this.state;
    todos = todos.filter(item => {
      return item.id !== id;
    });
    this.setState({
      todos
    });
  }

  // 全选或全不选
  checkAllTodo = (done) => {
    let {todos} = this.state;
    todos.forEach(item => {
      item.done = done
    });
    this.setState({
      todos
    });
  }

  // 清除所有已完成的
  clearAllDone = () => {
    let {todos} = this.state;
    todos = todos.filter(item => {
      return !item.done
    });
    this.setState({
      todos
    });
  }

  render() {
    const {todos} = this.state;
    return (
      <div>
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTodo}/>
            <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
            <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
