import React, { Component } from "react";
import { RecommendWrapper, RecommendItem } from "../style";
import { connect } from "react-redux";
class Recommendation extends Component {
  render() {
    return (
      <RecommendWrapper>
        {this.props.recommendList.map(ele => {
          return (
            <RecommendItem key={ele.id} imgUrl={ele.imgUrl}></RecommendItem>
          );
        })}
      </RecommendWrapper>
    );
  }
}
const mapStatetoProps = state => {
  return { recommendList: state.home.recommendList };
};
export default connect(mapStatetoProps)(Recommendation);
