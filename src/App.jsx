import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './reducers/rootReducer';

const store = createStore(rootReducer);

export const App = () => (
  <Provider store={store}>
    <div>Mobikit</div>
  </Provider>
);