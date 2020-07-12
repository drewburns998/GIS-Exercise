import types from "./actionTypes";

const initialState = {
  locationData: [],
  isDataLoaded: false,
};

export const rootReducer = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case types.SAVE_LOCATION_DATA:
      return { ...state, ...{ locationData: payload } };
    case types.FILE_UPLOADED_SUCCESSFULY:
      return { ...state, ...{ isDataLoaded: true } };
    case types.UPDATE_LOCATION_DATA:
      return { ...state, ...{ mergedData: payload } };
    default:
      return state;
  }
};
