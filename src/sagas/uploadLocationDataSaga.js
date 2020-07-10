import { take, all, fork } from "redux-saga/effects";
import types from "../reducers/actionTypes";

export function* pollForUpload() {
  while (true) {
    yield take(types.START_FILE_UPLOAD);
  }
}

export function* uploadLocationDataSaga() {
  yield all([fork(pollForUpload)]);
}
