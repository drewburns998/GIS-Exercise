import {
  saveLocationData,
  fileUploadedSuccessfully,
} from "../reducers/actionCreators";
import { pollForUpload } from "./uploadLocationDataSaga";
import { take, put } from "redux-saga/effects";
import types from "../reducers/actionTypes";

describe("upload location data saga", () => {
  it("correctly listens when START FILE UPLOAD is dispatched", () => {
    const action = saveLocationData({
      data: "foo",
    });
    const saga = pollForUpload(action);

    expect(saga.next().value).toEqual(take(types.SAVE_LOCATION_DATA));
    expect(
      saga.next({ payload: { fileInfo: { name: "aFile" } } }).value
    ).toEqual(put(fileUploadedSuccessfully("aFile")));
  });
});
