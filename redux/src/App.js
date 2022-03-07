// 顺序：第三方、自定义组件、样式
import React, { Component } from 'react';
import "./App.css";
import Count from './component/Count';

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
