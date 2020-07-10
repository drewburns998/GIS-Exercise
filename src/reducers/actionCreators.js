import types from "./actionTypes";

export const saveLocationData = (payload) => {
  return {
    type: types.SAVE_LOCATION_DATA,
    payload,
  };
};

export const fileUploadedSuccessfully = () => {
  return {
    type: types.FILE_UPLOADED_SUCCESSFULY,
  };
};

export const updateLocationData = (payload) => {
  return {
    type: types.UPDATE_LOCATION_DATA,
    payload,
  };
};

export default {
  saveLocationData,
  fileUploadedSuccessfully,
  updateLocationData,
};
