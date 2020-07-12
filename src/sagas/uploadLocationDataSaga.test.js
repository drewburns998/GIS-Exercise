import {
  saveLocationData,
  fileUploadedSuccessfully,
  saveSearchResults,
} from "../reducers/actionCreators";
import { pollForUpload } from "./uploadLocationDataSaga";
import { take, put, call } from "redux-saga/effects";
import types from "../reducers/actionTypes";
import { fileTransformer } from "../services/fileTransformer";
import { fetchData } from "../api/fetchData";
import { locationLookup } from "../services/locationLookup";

describe("upload location data saga", () => {
  const uploadedData = {
    payload: { fileInfo: { name: "aFile", data: "fileData" } },
  };

  it("correctly listens when START FILE UPLOAD is dispatched", () => {
    const action = saveLocationData({
      data: "foo",
    });
    const saga = pollForUpload(action);

    expect(saga.next().value).toEqual(take(types.SAVE_LOCATION_DATA));
    expect(saga.next(uploadedData).value).toEqual(
      put(fileUploadedSuccessfully("aFile"))
    );
    expect(saga.next(uploadedData).value).toEqual(
      call(fileTransformer, undefined)
    );
    expect(saga.next(uploadedData).value).toEqual(call(fetchData));
    expect(saga.next({ features: [] }).value).toEqual(
      call(locationLookup, uploadedData, [])
    );
    expect(saga.next(uploadedData).value).toEqual(
      put(saveSearchResults(expect.anything()))
    );
  });
});
