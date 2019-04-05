// 引入核心组件
import { combineReducers } from "redux-immutable";

// 引入home组件中的reducer
import { reducer as homeReducer } from "../home/store";

// 引入calculator组件中的reducer
import { reducer as calculatorReducer } from "../calculator/store";

// 将各组件的数据整合到一处
export default combineReducers({
    home: homeReducer,
    calculator: calculatorReducer
});
