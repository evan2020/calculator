// 引入action常量
import * as constants from "./constants";

// 导出actions

// 加法
export const addValue = data => {
    return {
        type: constants.ADD_VALUE
    };
};

// 减法
export const minusValue = data => {
    return {
        type: constants.MINUS_VALUE
    };
};

// 计算
export const computeValue = data => {
    return {
        type: constants.COMPUTE_VALUE
    };
};
