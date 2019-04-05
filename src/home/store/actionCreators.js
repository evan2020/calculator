

// 引入action常量
import * as actionTypes from "./constants";

// 导出actions
export const changeText = () => {
    return {
        type: actionTypes.CHANGE_TEXT,
        value: `test value`
    };
};
