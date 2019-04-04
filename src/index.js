// 引入react
import React from "react";
import ReactDOM from "react-dom";

// 引入APP组件
import App from "./App";

// 引入缓存提升速度
import * as serviceWorker from "./serviceWorker";



ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
