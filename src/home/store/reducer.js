// 引入action常量
import * as actionTypes from "./constants";

// 设置初始值
const defaultState = {
    homeText: `this is test redux`
};

// 导出数据
export default (state = defaultState, action) => {
    if (action.type === actionTypes.CHANGE_TEXT) {
        return {
            homeText: action.value
        };
    }
    return state;
};
