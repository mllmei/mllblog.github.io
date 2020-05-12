import React, { Component } from "react";
import { ListItem, ListInfo, LoadMore } from "../style";
import { connect } from "react-redux";
import * as actions from "../store/action";
import { Link } from "react-router-dom";

class List extends Component {
  render() {
    return (
      <div>
        {this.props.articleList.map((ele, index) => {
          return (
            <Link key={index} to={`/detail/${ele.id}`}>
              <ListItem>
                <img alt="pic" className={"pic"} src={ele.imgUrl} />
                <ListInfo>
                  <h3 className={"title"}>{ele.title}</h3>
                  <p className={"desc"}>{ele.desc}</p>
                </ListInfo>
              </ListItem>
            </Link>
          );
        })}
        <LoadMore
          onClick={() => {
            this.props.loadmore(this.props.page);
          }}
          className="loadmore"
          type="button"
        >
          ...加载更多
        </LoadMore>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { articleList: state.home.articleList, page: state.home.articlePage };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadmore(page) {
      dispatch(actions.loadmore(page));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(List);
