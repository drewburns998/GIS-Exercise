import { take, all, fork, put, select, call } from "redux-saga/effects";
import types from "../reducers/actionTypes";
import {
  fileUploadedSuccessfully,
  updateLocationData,
} from "../reducers/actionCreators";
import { locationLookup2 } from "../services/locationLookup2";
import { fetchData } from "../api/fetchData";



export function* pollForUpload() {
  while (true) {
    const action = yield take(types.SAVE_LOCATION_DATA);
    const { payload } = action;

    yield put(fileUploadedSuccessfully());
    let searchableData = yield call(fetchData);

    console.log("looking up data");
    const newData = yield call(locationLookup2, payload.data, searchableData);
    console.log("looking up finished");

    yield put(updateLocationData({ data: newData }));
  }
}

export function* uploadLocationDataSaga() {
  yield all([fork(pollForUpload)]);
}
