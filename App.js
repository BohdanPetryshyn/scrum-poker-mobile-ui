import React, { useEffect } from 'react';
import { Provider } from 'react-redux';

import Navigator from './navigations';
import store from './store';
import LoadExpoFonts from './components/hocs/LoadExpoFonts';
import { fetchCardSchemas } from './store/actions/requestActions';

export default () => {
  useEffect(() => {
    store.dispatch(fetchCardSchemas());
  });

  return (
    <LoadExpoFonts>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </LoadExpoFonts>
  );
};
