import { rootReducer } from "./rootReducer";

describe("rootReducer", () => {
  test("returns current state by default", () => {
    const initialState = {
      initialKey: "initialValue",
    };

    const result = rootReducer(initialState, {
      action: "No condition for this action ",
    });

    expect(result).toBe(initialState);
  });
});
