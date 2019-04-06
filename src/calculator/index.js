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

// 计算器组件
class Calculator extends Component {
    render() {
        // 解构赋值(注意引入的位置在render里面)
        const { keyArr, value, keyData, inputCon, resultVal } = this.props;
        // 组件
        return (
            <Container>
                {/* 当前输入的值 */}
                <TextValue>{value}</TextValue>
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
