import actionCreators from "./actionCreators";
import types from "./actionTypes";

describe("Location Data Action Creators", () => {
  test("saveLocationData should create an action to set the location data", () => {
    const expectedAction = {
      type: types.SAVE_LOCATION_DATA,
      value: "some data",
    };
    expect(actionCreators.saveLocationData("some data")).toEqual(
      expectedAction
    );
  });
});
