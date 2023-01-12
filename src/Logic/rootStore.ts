import { combineReducers, compose, createStore } from "redux";
import commerceReducer from "./ECommerce/commerceReducer";
import uxuiReducer from "./ECommerce/uxui/uxuiReducer";
import loginReducer from "./Login/loginReducer";

const allReducers = combineReducers({
  login: loginReducer,
	commerce: commerceReducer,
	uxui: uxuiReducer
});



const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) || compose;

export const rootStore = createStore(allReducers, composeEnhancers);
