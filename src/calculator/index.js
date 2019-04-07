import React, { Component } from "react";

// 引入样式文件
import {
    Container,
    KeyboardCon,
    Key,
    TextValue,
    ProcessText
} from "./style.js";

// 设置redux
import { connect } from "react-redux";

// 引入常量
import { actions } from "./store";

// 键码值转换
let formatKeyCode = value => {
    return new Promise((resolve, reject) => {
        let item = null;
        switch (value) {
            case 96:
                item = `0`;
                break;
            case 97:
                item = `1`;
                break;
            case 98:
                item = `2`;
                break;
            case 99:
                item = `3`;
                break;
            case 100:
                item = `4`;
                break;
            case 101:
                item = `5`;
                break;
            case 102:
                item = `6`;
                break;
            case 103:
                item = `7`;
                break;
            case 104:
                item = `8`;
                break;
            case 105:
                item = `9`;
                break;
            case 106:
                item = `*`;
                break;
            case 107:
                item = `+`;
                break;
            case 109:
                item = `-`;
                break;
            case 110:
                item = `.`;
                break;
            case 111:
                item = `/`;
                break;
            case 13:
                item = `=`;
                break;
            case 67:
                item = `C`;
                break;
            case 8:
                item = `←`;
                break;
            case 37:
                item = `←`;
                break;
            default:
                break;
        }
        resolve(item);
    });
};

let propsFun = null;

// 计算器组件
class Calculator extends Component {
    constructor(props) {
        super(props);
        document.addEventListener("keyup", this.keyUp);
        propsFun = props;
    }
    // 监听键盘向上事件
    keyUp(e) {
        formatKeyCode(e.keyCode).then(item => {
            propsFun.inputCon(item);
        });
    }

    render() {
        // 解构赋值(注意引入的位置在render里面)
        const { keyArr, value, keyData, inputCon, resultVal } = this.props;
        // 组件
        return (
            <Container>
                {/* 当前输入的值 */}
                <TextValue
                    className={value.length > 8 ? `smallSize` : `bigSize`}
                >
                    {value}
                </TextValue>
                {/* 根据是否存在结果显示计算过程或者结果 */}
                {resultVal ? (
                    <ProcessText>{resultVal}</ProcessText>
                ) : (
                    <ProcessText>{keyData.join(` `)}</ProcessText>
                )}
                {/* 按键区域 */}
                <KeyboardCon>
                    {keyArr.map((item, index) => {
                        return (
                            <Key
                                key={item}
                                onClick={() => {
                                    inputCon(item, index);
                                }}
                            >
                                {item}
                            </Key>
                        );
                    })}
                </KeyboardCon>
            </Container>
        );
    }
}
// 映射redux数据
const mapStateToProps = state => {
    return {
        value: state.getIn([`calculator`, `value`]),
        keyArr: state.getIn([`calculator`, `keyArr`]),
        keyData: state.getIn([`calculator`, `keyData`]),
        resultVal: state.getIn([`calculator`, `resultVal`])
    };
};
// 映射redux异步交互
const mapDispatchToProps = dispatch => {
    return {
        // 监听点击键盘
        inputCon(item) {
            if (
                item === `0` ||
                item === `1` ||
                item === `2` ||
                item === `3` ||
                item === `4` ||
                item === `5` ||
                item === `6` ||
                item === `7` ||
                item === `8` ||
                item === `9` ||
                item === `.`
            ) {
                dispatch(actions.getValueNowFun(item));
            } else {
                switch (item) {
                    case `+`:
                        dispatch(actions.recordValueFun(item));
                        break;
                    case `-`:
                        dispatch(actions.recordValueFun(item));
                        break;
                    case `*`:
                        dispatch(actions.recordValueFun(item));
                        break;
                    case `/`:
                        dispatch(actions.recordValueFun(item));
                        break;
                    case `C`:
                        dispatch(actions.cleanValueFun(``));
                        break;
                    case `(`:
                        dispatch(actions.recordValueFun(item));
                        break;
                    case `)`:
                        dispatch(actions.recordValueFun(item));
                        break;
                    case `←`:
                        dispatch(actions.backSpace(``));
                        break;
                    case `=`:
                        dispatch(actions.computeValueFun(item));
                        break;
                    default:
                        break;
                }
            }
        }
    };
};
// 映射redux
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calculator);
