import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import { LocationCSVUploadContainer } from "./containers/LocationCSVUpload.container";
import { LocationTableContainer } from "./containers/LocationTable.container";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools());

export const App = () => (
  <Provider store={store}>
    <div>Mobikit</div>
    <LocationCSVUploadContainer />
    <LocationTableContainer />
  </Provider>
);
