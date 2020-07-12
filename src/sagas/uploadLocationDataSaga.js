import { take, all, fork, put, call } from "redux-saga/effects";
import types from "../reducers/actionTypes";
import {
  fileUploadedSuccessfully,
  saveSearchResults,
} from "../reducers/actionCreators";
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

    const result = yield call(
      locationLookup,
      transformedUploadData,
      searchCorpus.features
    );

    console.log("we finished", result);

    yield put(saveSearchResults(result));
  }
}

export function* uploadLocationDataSaga() {
  yield all([fork(pollForUpload)]);
}
