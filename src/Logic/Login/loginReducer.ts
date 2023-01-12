import { IUserLogin, IAction } from "../models";
import { loginAction } from "./loginActions";
const initialState:IUserLogin[] = [
  {
    id: 1,
    username: "minnek",
    password: "minnek",
    isLogged: false,
    lastConnection: undefined,
  },
  {
    id: 2,
    username: "jventura",
    password: "jventura",
    isLogged: false,
    lastConnection: undefined,
  },
  {
    id: 3,
    username: "test",
    password: "test",
    isLogged: false,
    lastConnection: undefined,
  },
];
export default function loginReducer(state = initialState, action: IAction) {
  switch (action.type) {
    case loginAction.SIGN_IN:
      return state.map((user: IUserLogin) => {
        if (
          user.username !== action.payload.username &&
          user.password !== action.payload.password
        ) {
          return user;
        }
        return {
          ...user,
          isLogged: true,
        };
      });

    case loginAction.LOG_OUT:
      return state.map((user: IUserLogin) => {
        if (
          user.username !== action.payload.username &&
          user.password !== action.payload.password
        ) {
          return user;
        }
        return {
          ...action.payload,
          isLogged: true,
        };
      });

    default:
      return state;
  }
}

