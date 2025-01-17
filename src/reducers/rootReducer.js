import types from "./actionTypes";

const initialState = {
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

export const rootReducer = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case types.SAVE_LOCATION_DATA:
      return { ...state, ...{ locationData: payload } };
    case types.FILE_UPLOADED_SUCCESSFULY:
      return { ...state, isDataLoaded: true, uploadedFileName: payload };
    case types.SAVE_SEARCH_RESULTS:
      return { ...state, isSearchCompleted: true, searchResults: payload };
    case types.UPDATE_MAP_SEARCH_VALUES:
      return {
        ...state,
        mapSearchItems: payload,
        isRowClicked: true,
        ...{
          mapViewport: {
            width: 600,
            height: 600,
            latitude: parseFloat(payload.latitude[0]),
            longitude: parseFloat(payload.longitude[0]),
            zoom: 9.5,
          },
        },
      };
    case types.START_NEW_UPLOAD:
      return initialState;
    default:
      return state;
  }
};
