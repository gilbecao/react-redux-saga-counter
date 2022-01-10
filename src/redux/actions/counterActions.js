import actionTypes from "./counterActionTypes";

export function increment() {
  return {
    type: actionTypes.Increment,
  };
}

export function decrement() {
  return {
    type: actionTypes.Decrement,
  };
}

export function incrementAsync() {
  return {
    type: actionTypes.IncrementAsync,
  };
}
