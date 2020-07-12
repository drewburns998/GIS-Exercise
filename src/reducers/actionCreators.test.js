import actionCreators from "./actionCreators";
import types from "./actionTypes";

describe("Location Data Action Creators", () => {
  test("saveLocationData should create an action to set the location data", () => {
    const expectedAction = {
      type: types.SAVE_LOCATION_DATA,
      payload: "some data",
    };
    expect(actionCreators.saveLocationData("some data")).toEqual(
      expectedAction
    );
  });

  test("fileUploadedSuccessfully should create an action to set the saved file name", () => {
    const expectedAction = {
      type: types.FILE_UPLOADED_SUCCESSFULY,
      payload: "aFile.csv",
    };
    expect(actionCreators.fileUploadedSuccessfully("aFile.csv")).toEqual(
      expectedAction
    );
  });

  test("saveSearchResults should create an action to set the saved file name", () => {
    const expectedAction = {
      type: types.SAVE_SEARCH_RESULTS,
      payload: ["aFile.csv"],
    };
    expect(actionCreators.saveSearchResults(["aFile.csv"])).toEqual(
      expectedAction
    );
  });
});
