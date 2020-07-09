import { rootReducer } from "./rootReducer";

describe("rootReducer", () => {
  test("returns current state by default", () => {
    const initialState = {
      initialKey: "initialValue",
    };

    const result = rootReducer(initialState, {
      action: "No condition for this action ",
    });

    expect(result).toEqual(initialState);
  });

  test("returns default state by default", () => {
    const initialState = null;
    const expectedState = {
      locationData: [],
    };

    const result = rootReducer(undefined, {
      action: "anything",
    });

    expect(result).toEqual(expectedState);
  });
});
