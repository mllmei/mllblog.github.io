import React, { Component } from "react";
import { LoginWrapper, LoginBox, Input, Button } from "./style";
import { connect } from "react-redux";
import Home from "../home/index";
import * as action from "./store/action";
import { Redirect } from "react-router-dom";

class Write extends Component {
  render() {
    if (this.props.loginStatus) {
      return <div>write article</div>;
    } else {
      return <Redirect to="/login"></Redirect>;
    }
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    login(username, password) {
      dispatch(action.login(username, password));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    loginStatus: state.login.login,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Write);
