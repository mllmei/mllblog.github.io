import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { Link } from "react-router-dom";
import * as loginAction from "../../pages/login/store/action";

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
} from "./style";

class Header extends Component {
  getListArea = (show) => {
    const pageList = [];
    if (this.props.list.length > 0) {
      for (let i = (this.props.page - 1) * 5; i < this.props.page * 5; i++) {
        pageList.push(
          <SearchInfoItem key={this.props.list[i]}>
            {this.props.list[i]}
          </SearchInfoItem>
        );
      }
    }
    if (show || this.props.mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={this.props.handleEnter}
          onMouseLeave={this.props.handleLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => {
                this.props.handleChangePage(this.spinIcon);
              }}
            >
              <span
                ref={(icon) => {
                  this.spinIcon = icon;
                }}
                className="iconfont spin"
              >
                &#xe851;
              </span>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      );
    }
  };
  spinIcon() {}
  render() {
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">关于网站</NavItem>
          {this.props.login ? (
            <NavItem
              className="right"
              onClick={() => {
                this.props.logout();
              }}
            >
              退出
            </NavItem>
          ) : (
            <Link to="/login">
              <NavItem className="right">登陆</NavItem>
            </Link>
          )}
          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={this.props.focus}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                onClick={() => {
                  this.props.handleInputFocus(this.props.list);
                }}
                onBlur={this.props.handleInputBlur}
                className={this.props.focus ? "focused" : ""}
              ></NavSearch>
            </CSSTransition>

            <span
              className={
                this.props.focus ? "focused iconfont zoom" : "iconfont zoom"
              }
            >
              &#xe617;
            </span>
            {this.getListArea(this.props.focus)}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to="/write">
            <Button className="writting">
              <span className="iconfont pen">&#xe6e5;</span>写文章
            </Button>
          </Link>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    focus: state.header.focus,
    list: state.header.list,
    page: state.header.page,
    mouseIn: state.header.mouseIn,
    login: state.login.login,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout() {
      dispatch(loginAction.logout());
    },
    handleChangePage(spinIcon) {
      dispatch(actionCreators.handleChangePage(spinIcon));
    },
    handleLeave() {
      dispatch(actionCreators.handleLeave());
    },
    handleEnter() {
      dispatch(actionCreators.handleEnter());
    },
    handleInputFocus(list) {
      if (list.length === 0) {
        dispatch(actionCreators.getList());
      }
      dispatch(actionCreators.SearchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.SearchBlur());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
