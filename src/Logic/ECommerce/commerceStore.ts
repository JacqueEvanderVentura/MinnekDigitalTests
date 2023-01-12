import { createStore, Store } from "redux";
import commerceReducer from "./commerceReducer";
export const storeLogin:Store = createStore(commerceReducer);
