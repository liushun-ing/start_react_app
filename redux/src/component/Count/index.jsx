import React, { Component } from 'react'
import store from '../../redux/store'
import { 
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction
} from '../../redux/count_action'

export class Count extends Component {

  constructor(props) {
    super(props)
    this.state = {
       
    }
  }

  // 或者直接在index.js中全局订阅
  // componentDidMount() {
  //   // 检测redux中是否状态发生变化，变化就调用render
  //   store.subscribe(() => {
  //     this.setState({});
  //   })
  // }

  increment = ()=>{
    const {value} = this.selectNumber
    store.dispatch(createIncrementAction(value*1))
    // store.dispatch({type:'increment', data:value*1})
  }
  decrement = ()=>{
    const {value} = this.selectNumber
    // 简单自己创建action
    // store.dispatch({type:'decrement', data:value*1})
    store.dispatch(createDecrementAction(value*1))
  }
  incrementIfOdd = () => {
    const {value} = this.selectNumber
    const count = store.getState()
    if(count % 2 !== 0) {
      store.dispatch(createIncrementAction(value*1))
      // store.dispatch({type: 'increment', data:value*1})
    }
  }
  incrementAsync = () => {
    const {value} = this.selectNumber
    store.dispatch(createIncrementAsyncAction(value*1, 500))
      // store.dispatch({type: 'increment', data:value*1})
  }

  render() {
    return (
      <div>
        <h1>当前求和为:{store.getState()}</ h1>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    )
  }
}

export default Count
