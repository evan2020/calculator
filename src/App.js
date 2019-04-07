import React, { Component } from "react";

// 引入路由
import { HashRouter as Router, Route } from "react-router-dom";

// 引入全局样式
import GlobalStyle from "./common/reset";

// 引入home组件
import Home from "./home/index";
// 引入计算器组件
import Calculator from "./calculator/index";

// 引入store
import store from "./store/index";

// 引入redux核心组件
import { Provider } from "react-redux";

// 设置APP根目录
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    {/* 全局样式reset */}
                    <GlobalStyle />
                    {/* 首页路由 */}
                    <Route exact path="/home" component={Home} />
                    {/* 计算器路由 */}
                    <Route exact path="/" component={Calculator} />
                </Router>
            </Provider>
        );
    }
}

export default App;
