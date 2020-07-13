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
import { MobiMapContainer } from "./containers/MobiMap.container";


const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

export const App = () => (
  <Provider store={store}>
    <div>Mobikit</div>
    <LocationCSVUploadContainer />
    <LocationTableContainer />
    <MobiMapContainer />
  </Provider>
);

function* rootSaga() {
  yield all([uploadLocationDataSaga()]);
}

sagaMiddleware.run(rootSaga);
