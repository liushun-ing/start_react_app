// 这个不能自己引入，需要传props
// import store from '../../redux/store'
// 引入connct用于连接UI组件和redux
import { connect } from "react-redux";
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/count_action";
import React, { Component } from 'react'

class Count extends Component {

  increment = ()=>{
    const {value} = this.selectNumber
    this.props.increment(value*1)
  }
  decrement = ()=>{
    const {value} = this.selectNumber
    this.props.decrement(value*1)
  }
  incrementIfOdd = () => {
    const {value} = this.selectNumber

  }
  incrementAsync = () => {
    const {value} = this.selectNumber
    this.props.incrementAsync(value*1, 500)
  }

  render() {
    return (
      <div>
        <h1>当前求和为:{this.props.count}</ h1>
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

/*
1.mapStateToProps函数返回的是一个对象;
2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UT组件props的value
3.mapStateToProps用于传递状态
*/
function mapStateToProps(state) {
  return { count: state };
}

/*
1.mapDispatchToProps函数返回的是一个对象;
2.返回的对象中的key就作为传递纷UI组件props的key, value就作为传递给UT组件props的value
3.mapDispatchToProps用于传递操作状杰的方法

*/
// function mapDispatchToProps(dispatch) {
//   return {
//     increment: (number) => dispatch(createIncrementAction(number)),
//     decrement: (number) => dispatch(createDecrementAction(number)),
//     incrementAsync: (number, time) =>
//       dispatch(createIncrementAsyncAction(number, time)),
//   };
// }

// 简写形式，可以是一个对象
const mapDispatchToProps = {
  increment: createIncrementAction,
  decrement: createDecrementAction,
  incrementAsync: createIncrementAsyncAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Count);
