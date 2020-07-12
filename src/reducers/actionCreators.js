import types from "./actionTypes";

export const saveLocationData = (payload) => {
  return {
    type: types.SAVE_LOCATION_DATA,
    payload,
  };
};

export const fileUploadedSuccessfully = (filename) => {
  return {
    type: types.FILE_UPLOADED_SUCCESSFULY,
    payload: filename,
  };
};

export const saveSearchResults = (results) => {
  return {
    type: types.SAVE_SEARCH_RESULTS,
    payload: results,
  };
};

export const updateMapSearchValues = (results) => {
  return {
    type: types.UPDATE_MAP_SEARCH_VALUES,
    payload: results,
  };
};

export default {
  saveLocationData,
  fileUploadedSuccessfully,
  saveSearchResults,
  updateMapSearchValues,
};
