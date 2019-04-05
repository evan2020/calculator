// 引用immutable对象
import { fromJS } from "immutable";

// 设置初始值
const defaultState = fromJS({
    headerText: `this is test redux`
});

// 导出数据
export default (state = defaultState, action) => {
    return state;
};
