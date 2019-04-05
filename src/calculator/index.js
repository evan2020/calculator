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
                        return <Key key={item}>{item}</Key>;
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
