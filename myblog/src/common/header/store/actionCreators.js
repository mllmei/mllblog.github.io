import axios from "axios";
export const SearchFocus = () => {
  return {
    type: "search_focus",
  };
};
export const SearchBlur = () => {
  return {
    type: "search_blur",
  };
};
export const getList = () => {
  return (dispatch) => {
    axios
      .get("api/headerList.json")
      .then((res) => {
        const data = res.data;
        dispatch({
          type: "change_list",
          data: data.data,
          totalpage: Math.ceil(data.data.length / 5),
        });
      })
      .catch((err) => {
        console.log("error");
      });
  };
};
export const handleEnter = () => {
  return { type: "mouse_enter" };
};
export const handleLeave = () => {
  return { type: "mouse_leave" };
};
export const handleChangePage = (spinIcon) => {
  let originAngle = spinIcon.style.transform.replace(/[^0-9]/g, "");
  originAngle = !originAngle ? 0 : parseInt(originAngle, 10);
  spinIcon.style.transform = `rotate(${originAngle + 360}deg)`;

  return { type: "change_page" };
};
