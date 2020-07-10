import { startFileUpload } from "../reducers/actionCreators";
import { pollForUpload } from "./uploadLocationDataSaga";
import { take } from "redux-saga/effects";
import types from "../reducers/actionTypes";

describe("upload location data saga", () => {
  it("correctly listens when START FILE UPLOAD is dispatched", () => {
    const action = startFileUpload();
    const saga = pollForUpload(action);

    expect(saga.next().value).toEqual(take(types.START_FILE_UPLOAD));
  });
});
