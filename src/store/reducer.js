import { SET_RECOMMENDATIONS } from "./actions";

function recommendedReducer(state, action) {
  switch (action.type) {
    case SET_RECOMMENDATIONS:
      return [...action.payload];
    default:
      return state;
  }
}

export { recommendedReducer };
