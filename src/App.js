import React, { Component } from "react";

// 引入路由
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// 测试路由
function Home() {
    return <h2>Home</h2>;
}

// 测试路由
function About() {
    return <h2>About</h2>;
}

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                </div>
            </Router>
        );
    }
}

export default App;
