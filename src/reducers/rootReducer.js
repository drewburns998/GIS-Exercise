import types from "./actionTypes";

const initialState = {
  locationData: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_LOCATION_DATA:
      return { ...state, ...{ locationData: action.value } };
    default:
      return state;
  }
};
