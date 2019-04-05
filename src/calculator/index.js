import React, { Component } from "react";

// 引入样式文件
import { Container, Line, KeyboardCon, Key } from "./style.js";

// 设置redux
import { connect } from "react-redux";

class Calculator extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // 解构赋值(注意引入的位置在render里面)
        const { keyArr } = this.props;
        return (
            <Container>
                <Line />
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
        keyArr: state.getIn([`calculator`, `keyArr`])
    };
};

export default connect(
    mapStateToProps,
    null
)(Calculator);
