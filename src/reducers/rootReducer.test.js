import { rootReducer } from "./rootReducer";
import actionCreators from "./actionCreators";
import { initialState as testInitState} from "../utils/testUtils";

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
      mapSearchItems: {
        markers: [],
        id_values_matched: [],
        latitude: [],
        longitude: [],
      },
      mapViewport: {
        width: 600,
        height: 600,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8,
      },
      isRowClicked: false,
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
      mapSearchItems: {
        markers: [],
        id_values_matched: [],
        latitude: [],
        longitude: [],
      },
      mapViewport: {
        width: 600,
        height: 600,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8,
      },
      isRowClicked: false,
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
      mapSearchItems: {
        markers: [],
        id_values_matched: [],
        latitude: [],
        longitude: [],
      },
      mapViewport: {
        width: 600,
        height: 600,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8,
      },
      isRowClicked: false,
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
      mapSearchItems: {
        markers: [],
        id_values_matched: [],
        latitude: [],
        longitude: [],
      },
      mapViewport: {
        width: 600,
        height: 600,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8,
      },
      isRowClicked: false,
    };

    const result = rootReducer(undefined, action);

    expect(result).toEqual(expectedState);
  });

  test("returns default state when starting a new upload", () => {
    const action = actionCreators.startNewUpload();
    const currentState = {
      ...testInitState,
      uploadedFileName: "fake file",
    };

    const expectedState = {
      locationData: [],
      isDataLoaded: false,
      uploadedFileName: "",
      searchResults: [],
      isSearchCompleted: false,
      mapSearchItems: {
        markers: [],
        id_values_matched: [],
        latitude: [],
        longitude: [],
      },
      mapViewport: {
        width: 600,
        height: 600,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8,
      },
      isRowClicked: false,
    };

    const result = rootReducer(currentState, action);

    expect(result).toEqual(expectedState);
  });
});
