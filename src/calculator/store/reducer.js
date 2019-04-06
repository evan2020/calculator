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
        `/`,
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
            return state
                .set(`value`, state.get(`value`) + action.value)
                .set(`resultVal`, ``);
        // 获取默认值(清空)
        case constants.CLEAN_VALUE:
            return state
                .set(`value`, ``)
                .set(`resultVal`, ``)
                .set(`keyData`, fromJS([]));
        // 记录数据
        case constants.RECORD_VALUE:
            let newKeyData = state
                .get(`keyData`)
                .push(state.get(`value`))
                .push(action.value);
            return state.set(`keyData`, newKeyData).set(`value`, ``);
        // 计算结果
        case constants.COMPUTE_VALUE:
            let isEval = false;
            let res = 0;
            let resEvalVal = ``;
            state.get(`keyData`).map((item, index) => {
                if (item === `*` || item === `/`) {
                    isEval = true;
                }
                resEvalVal += item;
                return item;
            });
            if (!isEval) {
                let firstStr = Number(state.get(`keyData`).first());
                let valueStr = Number(state.get(`value`));
                res += firstStr;
                state.get(`keyData`).map((item, index) => {
                    if (item === `+`) {
                        res += Number(state.get(`keyData`).get(index + 1)) || 0;
                    }
                    if (item === `-`) {
                        res -= Number(state.get(`keyData`).get(index + 1)) || 0;
                    }
                    return item;
                });
                if (valueStr && state.get(`keyData`).last() === `+`) {
                    res += valueStr;
                } else if (valueStr && state.get(`keyData`).last() === `-`) {
                    res -= valueStr;
                }
            } else {
                let symbolVal = resEvalVal.slice(-1);
                let newRes = ``;
                if (
                    symbolVal === `+` ||
                    symbolVal === `-` ||
                    symbolVal === `*` ||
                    symbolVal === `/`
                ) {
                    state
                        .get(`keyData`)
                        .pop()
                        .map((item, index) => {
                            newRes += item;
                            return item;
                        });
                }
                if (state.get(`value`)) {
                    newRes += symbolVal;
                    newRes += state.get(`value`);
                }
                try {
                    res = eval(newRes);
                } catch (e) {
                    // 提示语:建议不要使用连续的算术符号
                    alert(`未知错误${e}`);
                }
            }

            return state
                .set(`resultVal`, res)
                .set(`value`, ``)
                .set(`keyData`, fromJS([]));
        // 退格
        case constants.BACK_SPACE:
            let str = state.get(`value`).slice(0, -1);
            return state.set(`value`, str);
        default:
            break;
    }
    return state;
};
