// 顺序：第三方、自定义组件、样式
import React, { Component } from 'react';
import "./App.css";
import Count from './containers/Count';
import store from './redux/store';

export class App extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Count></Count>
      </div>
    )
  }
}

export default App
