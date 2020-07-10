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

    let b = newData.features.filter((x) => x.properties.id_value.length > 0);
    // console.log("looking up finished", newData.features[0].properties.id_value);
    console.log("looking up finished", b);


    yield put(updateLocationData({ data: newData }));
  }
}

export function* uploadLocationDataSaga() {
  yield all([fork(pollForUpload)]);
}
