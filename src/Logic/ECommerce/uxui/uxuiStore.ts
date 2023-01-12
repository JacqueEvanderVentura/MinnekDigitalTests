import { createStore, Store } from "redux";
import uxuiReducer from "./uxuiReducer";

export const storeUxui: Store = createStore(uxuiReducer);
