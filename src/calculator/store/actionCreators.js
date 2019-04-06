// 引入action常量
import * as constants from "./constants";

// ------------------------------------定义并且导出actions start--------------------------------------

// 加法
export const addValue = (value = ``) => {
    return {
        type: constants.ADD_VALUE
    };
};

// 减法
export const minusValue = (value = ``) => {
    return {
        type: constants.MINUS_VALUE
    };
};

// 计算
export const computeValue = (value = ``) => {
    return {
        type: constants.COMPUTE_VALUE
    };
};

// 获取当前输入的值
export const getValueNow = (value = ``) => {
    return {
        type: constants.GET_VALUE_NOW,
        value
    };
};

// 清空数据
export const cleanValue = (value = ``) => {
    return {
        type: constants.CLEAN_VALUE,
        value
    };
};

// 记录数据
export const recordValue = (value = ``) => {
    return {
        type: constants.RECORD_VALUE,
        value
    };
};

// ------------------------------------定义并且导出actions end--------------------------------------

// ------------------------------------action 异步函数 start----------------------------------------
// 获取当前输入的值
export const getValueNowFun = (value = ``) => {
    return dispatch => {
        const action = getValueNow(value);
        dispatch(action);
    };
};

// 清空当前值,回归默认数据
export const cleanValueFun = (value = ``) => {
    return dispatch => {
        const action = cleanValue(value);
        dispatch(action);
    };
};

// 点击加减乘除时,清空数值,得出临时结果,并上一次的记录数据
export const recordValueFun = (value = ``) => {
    return dispatch => {
        const action = recordValue(value);
        dispatch(action);
    };
};
// ------------------------------------action 异步函数 end----------------------------------------
