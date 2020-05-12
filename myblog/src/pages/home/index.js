import React, { Component } from "react";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style.js";
import Writer from "./components/writer.js";
import List from "./components/list.js";
import Topic from "./components/topic.js";
import Recommendation from "./components/recommendation.js";
import axios from "axios";
import { connect } from "react-redux";
import * as actions from "./store/action.js";
import { Redirect } from "react-router-dom";
class Home extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
    axios.get("/api/home.json").then((res) => {
      this.props.getHomeData(res.data);
    });
  }
  componentWillMount() {
    window.removeEventListener("scroll", this.props.changeScrollTopShow);
  }

  handleScrollTop = () => {
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <div>
        <HomeWrapper>
          <HomeLeft>
            <img
              className="banner-img"
              src="https://www.brandinlabs.com/wp-content/uploads/2013/10/blog-writing.jpg"
            />
            <Topic></Topic>
            <List></List>
          </HomeLeft>
          <HomeRight>
            <Recommendation></Recommendation>
            <Writer></Writer>
          </HomeRight>
          <BackTop
            hidden={!this.props.showScroll}
            onClick={() => {
              this.handleScrollTop();
            }}
          >
            回到顶部
          </BackTop>
        </HomeWrapper>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    showScroll: state.home.showScroll,
    login: state.login.login,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getHomeData(res) {
      dispatch(actions.getHomeData(res));
    },
    changeScrollTopShow() {
      if (document.documentElement.scrollTop > 400) {
        dispatch(actions.changeScrollTopShow(true));
      } else {
        dispatch(actions.changeScrollTopShow(false));
      }
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
