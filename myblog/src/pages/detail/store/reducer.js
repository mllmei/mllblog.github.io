const defaultState = {
  title: "",
  content: "",
  imgUrl: "",
};
export const detailReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_DETAILS":
      return {
        ...state,
        title: action.data.title,
        content: action.data.content,
        imgUrl: action.data.imgUrl,
      };
  }
  return state;
};
