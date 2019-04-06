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
        return (
            <Container>
                <TextValue>{value}</TextValue>
                {resultVal ? (
                    <ProcessText>{resultVal}</ProcessText>
                ) : (
                    <ProcessText>{keyData.join(` `)}</ProcessText>
                )}
                {/* <ProcessText>{keyData.join(` `)}</ProcessText> */}
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

const mapStateToProps = state => {
    return {
        value: state.getIn([`calculator`, `value`]),
        keyArr: state.getIn([`calculator`, `keyArr`]),
        keyData: state.getIn([`calculator`, `keyData`]),
        resultVal: state.getIn([`calculator`, `resultVal`])
    };
};

const mapDispatchToProps = dispatch => {
    return {
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
                console.log(`item >>>>>`, item);
                dispatch(actions.getValueNowFun(item));
            } else {
            }
            switch (item) {
                case `+`:
                    console.log(`item >>>>>`, item);
                    dispatch(actions.recordValueFun(item));
                    break;
                case `-`:
                    console.log(`item >>>>>`, item);
                    dispatch(actions.recordValueFun(item));
                    break;
                case `*`:
                    console.log(`item >>>>>`, item);
                    dispatch(actions.recordValueFun(item));
                    break;
                case `/`:
                    console.log(`item >>>>>`, item);
                    dispatch(actions.recordValueFun(item));
                    break;
                case `C`:
                    console.log(`item >>>>>`, item);
                    dispatch(actions.cleanValueFun(``));
                    break;
                case `(`:
                    console.log(`item >>>>>`, item);
                    break;
                case `)`:
                    console.log(`item >>>>>`, item);
                    break;
                case `.`:
                    console.log(`item >>>>>`, item);
                    break;
                case `←`:
                    console.log(`item >>>>>`, item);
                    dispatch(actions.backSpace(``));
                    break;
                case `=`:
                    console.log(`item >>>>>`, item);
                    dispatch(actions.computeValueFun(item));
                    break;
                default:
                    break;
            }
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calculator);
