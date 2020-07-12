import { take, all, fork, put, call } from "redux-saga/effects";
import types from "../reducers/actionTypes";
import { fileUploadedSuccessfully } from "../reducers/actionCreators";
import { fileTransformer } from "../services/fileTransformer";
import { locationLookup } from "../services/locationLookup";
import { fetchData } from "../api/fetchData";

export function* pollForUpload() {
  while (true) {
    const action = yield take(types.SAVE_LOCATION_DATA);
    const { payload } = action;
    const { data, fileInfo } = payload;

    yield put(fileUploadedSuccessfully(fileInfo.name));
    const transformedUploadData = yield call(fileTransformer, data);
    const searchCorpus = yield call(fetchData);

    yield call(locationLookup, transformedUploadData, searchCorpus);
  }
}

export function* uploadLocationDataSaga() {
  yield all([fork(pollForUpload)]);
}
