import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Navigator from './navigations';
import reducer from './reducers';

const store = createStore(reducer);

export default () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);
