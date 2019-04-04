import React, { Component } from "react";

// 引入路由
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// 引入全局样式
import GlobalStyle from "./reset";

// 引入home组件
import Home from "./home/index";

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
                    <div>
                        {/* 全局样式reset */}
                        <GlobalStyle />
                        {/* 首页路由 */}
                        <Route exact path="/" component={Home} />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
