import axios from "axios";
export const getHomeData = (res) => {
  return { type: "GET_HOME_DATA", data: res };
};
export const loadmore = (page) => {
  return (dispatch) => {
    axios.get(`/api/homeList.json?page=${page}`).then((res, rej) => {
      dispatch({ type: "LOAD_MORE", data: res.data.data, nextPage: page + 1 });
    });
  };
};
export const changeScrollTopShow = (e) => {
  return { type: "CHANGE_SCROLLTOP", data: e };
};
