import { LOGIN_USER, LOGOUT_USER } from "./actions";

export const initialState = null;

export const userReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return action.payload.user;
    case LOGOUT_USER:
      return action.payload.user;
    default:
      return state;
  }
};
