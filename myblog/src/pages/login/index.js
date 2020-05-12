import React, { Component } from "react";
import { LoginWrapper, LoginBox, Input, Button } from "./style";
import { connect } from "react-redux";
import Home from "../home/index";
import * as action from "./store/action";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = { username: "", password: "" };
  inputUsername(e) {
    this.setState({ username: e.target.value });
  }
  inputPassword(e) {
    this.setState({ password: e.target.value });
  }
  render() {
    if (this.props.loginStatus) {
      return <Redirect to="/"></Redirect>;
    } else {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input
              placeholder="用户名"
              type="text"
              onChange={(e) => {
                this.inputUsername(e);
              }}
            ></Input>
            <Input
              placeholder="密码"
              type="password"
              onChange={(e) => {
                this.inputPassword(e);
              }}
            ></Input>

            <Button
              onClick={() => {
                this.props.login(this.state.username, this.state.password);
              }}
            >
              登陆
            </Button>
          </LoginBox>
        </LoginWrapper>
      );
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
export default connect(mapStateToProps, mapDispatchToProps)(Login);
