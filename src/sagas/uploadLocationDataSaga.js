import { take, all, fork, put } from "redux-saga/effects";
import types from "../reducers/actionTypes";
import { fileUploadedSuccessfully } from "../reducers/actionCreators";

export function* pollForUpload() {
  while (true) {
    const action = yield take(types.SAVE_LOCATION_DATA);
    const { payload } = action;

    yield put(fileUploadedSuccessfully());
  }
}

export function* uploadLocationDataSaga() {
  yield all([fork(pollForUpload)]);
}
