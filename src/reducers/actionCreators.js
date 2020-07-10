import types from "./actionTypes";

export const saveLocationData = (data) => {
  return {
    type: types.SAVE_LOCATION_DATA,
    value: data,
  };
};

export const startFileUpload = () => {
  return {
    type: types.START_FILE_UPLOAD,
  };
};

export default {
  saveLocationData,
};
