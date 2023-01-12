import { IAction, IUXUI } from "../../models";
import { uxuiActions } from "./uxuiActions";


const initialState: IUXUI = {
  showModal: false,
	activeSlides: [0, 3]
};

export default function uxuiReducer(state = initialState, action: IAction) {
  switch (action.type) {
    case uxuiActions.SHOW_MODAL:
      return { ...state, showModal: true };

    case uxuiActions.CLOSE_MODAL:
      return { ...state, showModal: false };

		case uxuiActions.SET_ACTIVE_SLIDES:
			return { ...state, activeSlides: action.payload}

    default:
      return state;
  }
}
