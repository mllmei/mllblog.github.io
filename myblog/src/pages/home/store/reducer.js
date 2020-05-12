const defaultState = {
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 0,
  showScroll: false,
};
export const homeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_HOME_DATA":
      return {
        ...state,
        topicList: [...action.data.topicList],
        articleList: [...action.data.articleList],
        recommendList: [...action.data.recommendList],
      };
    case "LOAD_MORE":
      return {
        ...state,
        articleList: [...state.articleList, ...action.data],
        articlePage: action.nextPage,
      };
    case "CHANGE_SCROLLTOP":
      return {
        ...state,
        showScroll: action.data,
      };
  }
  return state;
};
