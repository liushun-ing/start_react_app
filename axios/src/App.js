// 顺序：第三方、自定义组件、样式
import React, { Component } from 'react';
// import axios from 'axios';

import Search from './component/Search';
import List from './component/List';

import "./App.css";

export class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      users : [],
      isFirst: true,
      isLoading: false,
      err: ''
    }
  }

  updateState = (newState) => {
    // console.log(newState)
    this.setState({
      ...newState
    })
  }

  render() {
    return (
      <div>
        <div className="container">
          <Search updateState={this.updateState}></Search>
          <List state={this.state}></List>
        </div>
      </div>
    )
  }
}

export default App
