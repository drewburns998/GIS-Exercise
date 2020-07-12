import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

export const renderWithStore = (Component, state = {}) => {
  const store = configureStore()(state);

  const subject = render(<Provider store={store}>{Component}</Provider>);

  return { store, subject };
};

export const initialState = {
  locationData: [],
  isDataLoaded: false,
  uploadedFileName: "",
  searchResults: [],
  isSearchCompleted: false,
};

export const ensureGridApiHasBeenSet = (component) => {
  return waitForAsyncCondition(() => {
    return component.instance().api !== undefined;
  }, 5);
};

export const waitForAsyncCondition = (condition, maxAttempts, attempts = 0) =>
  new Promise(function (resolve, reject) {
    (function waitForCondition() {
      // we need to wait for the gridReady event before we can start interacting with the grid
      // in this case we're looking at the api property in our App component, but it could be
      // anything (ie a boolean flag)
      if (condition()) {
        // once our condition has been met we can start the tests
        return resolve();
      }
      attempts++;

      if (attempts >= maxAttempts) {
        reject("Max timeout waiting for condition");
      }

      // not set - wait a bit longer
      setTimeout(waitForCondition, 10);
    })();
  });
