// 引入核心组件
import { combineReducers } from "redux";

// 引入header组件中的reducer
import headerReducer from "../header/store/reducer";

// 引入home组件中的reducer
import homeReducer from "../home/store/reducer";

// 将各组件的数据整合到一处
export default combineReducers({
    header: headerReducer,
    home: homeReducer
});
