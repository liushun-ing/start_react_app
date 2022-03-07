/**
 * 专门为count组件生成action
 */
import {INCREMENT, DECREMENT} from './constant'
// 同步action，返回值为对象
export const createIncrementAction = data => ({
  type: INCREMENT,
  data
})

export const createDecrementAction = data => ({
  type: DECREMENT,
  data
})

// 异步action返回值为函数,异步action中一般都会调用同步action
export const createIncrementAsyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(data))
    }, time);
  }
}