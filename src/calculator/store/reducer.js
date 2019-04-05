// 引用immutable对象
import { fromJS } from "immutable";

// 设置初始值
const defaultState = fromJS({
    // 默认值
    value: 0,
    // 输入的所有数据
    keyData: [],
    // 键盘的按键
    keyArr: [
        `C`,
        `(`,
        `)`,
        `←`,
        `7`,
        `8`,
        `9`,
        `%`,
        `4`,
        `5`,
        `6`,
        `*`,
        `1`,
        `2`,
        `3`,
        `-`,
        `0`,
        `.`,
        `x`,
        `+`
    ]
});

// 导出数据
export default (state = defaultState, action) => {
    return state;
};
