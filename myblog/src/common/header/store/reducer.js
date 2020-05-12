const defaultState = {
  focus: false,
  list: [],
  page: 1,
  totalpage: 1,
  mouseIn: false,
};
const headerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "search_focus":
      return { ...state, focus: true };
    case "search_blur":
      return { ...state, focus: false };
    case "change_list":
      return { ...state, list: [...action.data], totalpage: action.totalpage };
    case "mouse_enter":
      return { ...state, mouseIn: true };
    case "mouse_leave":
      return { ...state, mouseIn: false };
    case "change_page":
      return {
        ...state,
        page: state.page === state.totalpage ? 1 : state.page + 1,
      };
  }
  return state;
};
export default headerReducer;
