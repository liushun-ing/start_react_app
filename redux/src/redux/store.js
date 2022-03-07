// 引入createStore,专门用于创建最为核心的store对象
import {createStore, applyMiddleware} from 'redux';
//引入count组件服务的reducer
import countReducer from './count_reducer'
// 引入redun-thunk,用来指出异步action,并且需要applyMiddleware支持
import thunk from 'redux-thunk'
// 暴露store
export default createStore(countReducer, applyMiddleware(thunk))