import React from 'react';
import { Provider } from 'react-redux';

import Navigator from './navigations';
import store from './store';

export default () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);
