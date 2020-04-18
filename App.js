import React from 'react';
import { Provider } from 'react-redux';

import Navigator from './navigations';
import store from './store';
import LoadExpoFonts from './components/hocs/LoadExpoFonts';

export default () => {
  return (
    <LoadExpoFonts>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </LoadExpoFonts>
  );
};
