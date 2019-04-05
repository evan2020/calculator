// 引入action常量
import * as constants from "./constants";

// 导出actions
export const changeText = () => {
    return {
        type: constants.CHANGE_ALL,
    };
};
