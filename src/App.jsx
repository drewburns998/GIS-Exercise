import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import { LocationCSVUploadContainer } from "./containers/LocationCSVUpload.container";
import { LocationTableContainer } from "./containers/LocationTable.container";
import { composeWithDevTools } from "redux-devtools-extension";
import { uploadLocationDataSaga } from "./sagas/uploadLocationDataSaga";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { AppContainer } from "./containers/AppContent.container";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

const divStyle = {
  margin: "50px 25px",
  textAlign: "center",
};

export const App = () => (
  <Provider store={store}>
    <h1 style={divStyle}>Mobikit Coding Exercise</h1>
    <AppContainer />
  </Provider>
);

function* rootSaga() {
  yield all([uploadLocationDataSaga()]);
}

sagaMiddleware.run(rootSaga);
