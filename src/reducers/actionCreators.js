import types from "./actionTypes";

export const saveLocationData = (data) => {
  return {
    type: types.SAVE_LOCATION_DATA,
    value: data,
  };
};

export default {
  saveLocationData,
};
