// 引入redux
import { createStore, compose, applyMiddleware } from "redux";

// 引用redux中间件
import thunk from "redux-thunk";

// 引入resucer
import reducer from "./reducer";

// 设置扩展环境
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 结合thunk使用
const enhancer = composeEnhancers(applyMiddleware(thunk));

// 创建store
const store = createStore(reducer, enhancer);

// 导出store
export default store;
