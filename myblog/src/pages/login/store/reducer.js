const defaultState = {
  login: localStorage.getItem("login") || false,
};
export const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, login: true };
    case "LOG_OUT":
      return { ...state, login: false };
  }

  return state;
};
