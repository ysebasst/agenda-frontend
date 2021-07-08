export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGIN_USER";

export const loginUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
  return {
    type: LOGIN_USER,
    payload: { user },
  };
};
export const logoutUser = () => {
  localStorage.removeItem("user");
  return {
    type: LOGOUT_USER,
    payload: { user: null },
  };
};
