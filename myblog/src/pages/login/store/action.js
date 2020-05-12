import axios from "axios";
export const login = (username, password) => {
  return (dispatch) => {
    axios
      .get(
        "/mllblog/api/login.json?username=" + username + "&password=" + password
      )
      .then((res, rej) => {
        let result = res.data.status;
        if (result) {
          dispatch({ type: "LOGIN" });
        } else {
          alert("登陆失败");
        }
      })
      .then(() => {
        localStorage.setItem("login", true);
      });
  };
};
export const logout = () => {
  return (dispatch) => {
    return new Promise((res, rej) => {
      res(dispatch({ type: "LOG_OUT" }));
    }).then(() => {
      localStorage.removeItem("login");
    });
  };
};
