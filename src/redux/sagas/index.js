import { all, put, takeEvery } from "redux-saga/effects";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function* incrementAsync() {
  yield delay(1000);
  yield put({ type: "INCREMENT" });
}

function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

export default function* rootSaga() {
  yield all([watchIncrementAsync()]);
}
