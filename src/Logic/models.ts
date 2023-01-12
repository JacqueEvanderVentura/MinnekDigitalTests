import { compose } from "redux";
declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

export interface IRouting {
  path: string;
  content: string;
  element: Function;
}

export interface IUserLogin {
  id?: number;
  username: string;
  password: string;
  isLogged?: boolean;
  lastConnection?: Date | undefined;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export interface IAction {
  type: string;
  payload: any;
}

export interface IUXUI {
  showModal: boolean;
  activeSlides: Array<number>;
}