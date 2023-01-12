import { createStore, Store } from "redux";
import loginReducer from "./loginReducer";
export const storeLogin: Store = createStore(loginReducer);