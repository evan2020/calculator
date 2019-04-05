// 引入action常量
import * as constants from "./constants";

// 引用immutable对象
import { fromJS } from "immutable";

// 设置初始值
const defaultState = fromJS({
    homeText: `this is test redux`
});

// 导出数据
export default (state = defaultState, action) => {
    if (action.type === constants.CHANGE_TEXT) {
        return state.set(`homeText`, `test value`);
    }
    return state;
};
