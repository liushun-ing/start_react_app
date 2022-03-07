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

    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <Search></Search>
          <List></List>
        </div>
      </div>
    )
  }
}

export default App
