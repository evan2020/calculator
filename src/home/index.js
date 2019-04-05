import React, { Component } from "react";

// 引入connect
import { connect } from "react-redux";

// 引入actionCreators
import * as actionCreators from "./store/actionCreators";

// 引入常量
import * as contants from "./store/constants";

// 首页组件
class Home extends Component {
    render() {
        return <div onClick={this.props.changeText}>{this.props.text}</div>;
    }
}

const mapStateToProps = state => {
    return {
        text: state.getIn([`home`, `homeText`])
    };
};
const mapDispatchToProps = dispatch => {
    return {
        changeText() {
            dispatch(actionCreators.changeText());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
