import React, { Component } from "react";
import { TopicWrapper, TopicItem } from "../style";
import { connect } from "react-redux";
class Topic extends Component {
  render() {
    return (
      <TopicWrapper>
        {this.props.list.map(ele => {
          return (
            <TopicItem key={ele.id}>
              <img className="topic-pic" src={ele.imgUrl} />
              {ele.title}
            </TopicItem>
          );
        })}
      </TopicWrapper>
    );
  }
}
const mapStateToProps = state => {
  return { list: state.home.topicList };
};
const mapDispatchToProps = () => {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Topic);
