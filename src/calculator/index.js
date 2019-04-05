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

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.inputCon = this.inputCon.bind(this);
    }

    inputCon(item) {
        let that = this;
        console.log(`当前点击的值为 >>>>>>`, item);
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
            item === `9`
        ) {
            console.log(`item >>>>>`, item);
        } else {
        }
        switch (item) {
            case `+`:
                console.log(`item >>>>>`, item);
                break;
            case `-`:
                console.log(`item >>>>>`, item);
                break;
            case `*`:
                console.log(`item >>>>>`, item);
                break;
            case `%`:
                console.log(`item >>>>>`, item);
                break;
            case `C`:
                console.log(`item >>>>>`, item);
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
                break;
            case `=`:
                console.log(`item >>>>>`, item);
                break;
            default:
                break;
        }
    }
    render() {
        // 解构赋值(注意引入的位置在render里面)
        const { keyArr, value, keyData } = this.props;
        return (
            <Container>
                <TextValue>{value}</TextValue>
                <ProcessText>{keyData.join(` `)}</ProcessText>
                <KeyboardCon>
                    {keyArr.map((item, index) => {
                        return (
                            <Key
                                key={item}
                                onClick={() => {
                                    this.inputCon(item, index);
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
        keyData: state.getIn([`calculator`, `keyData`])
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calculator);
