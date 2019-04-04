import React, { Component } from "react";

// 引入路由
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// 引入全局样式
import GlobalStyle from "./reset";

// 测试路由
function Home() {
    return <h2>Home</h2>;
}

// 设置APP根目录
class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <GlobalStyle />
                    <Route exact path="/" component={Home} />
                </div>
            </Router>
        );
    }
}

export default App;
