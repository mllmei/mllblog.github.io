import axios from "axios";
export const getDetails = (id) => {
  return (dispatch) => {
    axios.get("/api/detail.json?id=" + id).then((res, rej) => {
      dispatch({ type: "GET_DETAILS", data: res.data });
    });
  };
};
