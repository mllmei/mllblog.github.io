import React, { Component } from "react";
import { DetailWrapper, Header, Content } from "./style";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "./store/action";
class Detail extends Component {
  componentDidMount() {
    this.props.getDetails(this.props.match.params.id);
  }
  render() {
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content>
          <img src={this.props.imgUrl}></img>
          <p>{this.props.content}</p>
        </Content>
      </DetailWrapper>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    title: state.detail.title,
    content: state.detail.content,
    imgUrl: state.detail.imgUrl,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getDetails(id) {
      dispatch(actions.getDetails(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));
