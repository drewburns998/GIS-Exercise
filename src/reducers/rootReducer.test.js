import { rootReducer } from "./rootReducer";
import actionCreators from "./actionCreators";

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
    const expectedState = {
      locationData: [],
      isDataLoaded: false,
      uploadedFileName: "",
      searchResults: [],
      isSearchCompleted: false,
    };

    const result = rootReducer(undefined, {
      action: "anything",
    });

    expect(result).toEqual(expectedState);
  });

  test("correctly adds location data", () => {
    const sampleData = [{ foo: "bar" }, { bar: "baz" }];
    const action = actionCreators.saveLocationData(sampleData);
    const expectedState = {
      locationData: sampleData,
      isDataLoaded: false,
      uploadedFileName: "",
      searchResults: [],
      isSearchCompleted: false,
    };

    const result = rootReducer(undefined, action);

    expect(result).toEqual(expectedState);
  });

  test("correctly adds saved results data", () => {
    const sampleData = ["results"];
    const action = actionCreators.saveSearchResults(sampleData);
    const expectedState = {
      locationData: [],
      isDataLoaded: false,
      uploadedFileName: "",
      searchResults: ["results"],
      isSearchCompleted: true,
    };

    const result = rootReducer(undefined, action);

    expect(result).toEqual(expectedState);
  });

  test("updates isDataLoaded state", () => {
    const action = actionCreators.fileUploadedSuccessfully("aFile.csv");
    const expectedState = {
      locationData: [],
      isDataLoaded: true,
      uploadedFileName: "aFile.csv",
      searchResults: [],
      isSearchCompleted: false,
    };

    const result = rootReducer(undefined, action);

    expect(result).toEqual(expectedState);
  });
});
