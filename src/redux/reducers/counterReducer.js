import actionTypes from "../actions/counterActionTypes";

export default function counterReducer(state = 0, action) {
  switch (action.type) {
    case actionTypes.Increment:
      return state + 1;
    case actionTypes.Decrement:
      return state - 1;
    default:
      return state;
  }
}
