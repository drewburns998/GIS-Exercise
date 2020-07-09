import types from "./actionTypes";

const saveLocationData = (data) => {
  return {
    type: types.SAVE_LOCATION_DATA,
    value: data,
  };
};

export default {
  saveLocationData,
};
