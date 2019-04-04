import React, { Component } from "react";

// 引入connect
import { connect } from "react-redux";

// 首页组件
class Home extends Component {
    render() {
        return <div>home</div>;
    }
}

const mapStateToProps = state => {
    return {};
};
const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
