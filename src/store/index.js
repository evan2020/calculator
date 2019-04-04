// 引入redux
import { createStore, applyMiddleware, compose } from "redux";

// 引入resucer
import reducer from "./reducer";

// 设置扩展环境
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 创建store
const store = createStore(reducer, composeEnhancers());

// 导出store
export default store;
