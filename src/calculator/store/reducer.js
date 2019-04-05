// 引用immutable对象
import { fromJS } from "immutable";

import { constants } from "./index";

// 设置初始值
const defaultState = fromJS({
    // 默认值
    value: ``,
    // 输入的所有数据
    keyData: [],
    // 计算的结果
    resultVal: ``,
    // 键盘的按键
    keyArr: [
        `C`,
        `(`,
        `)`,
        `+`,
        `7`,
        `8`,
        `9`,
        `-`,
        `4`,
        `5`,
        `6`,
        `*`,
        `1`,
        `2`,
        `3`,
        `%`,
        `0`,
        `.`,
        `←`,
        `=`
    ]
});

// 导出数据
export default (state = defaultState, action) => {
    switch (action.type) {
        // 获取输入框的值
        case constants.GET_VALUE_NOW:
            return state.set(`value`, state.get(`value`) + action.value);
        // 获取默认值
        case constants.CLEAN_VALUE:
            return state
                .set(`value`, ``)
                .set(`resultVal`, ``)
                .set(`keyData`, []);
        default:
            break;
    }
    return state;
};
