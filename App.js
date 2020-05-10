import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';

import Navigator from './navigations';
import store from './store';
import LoadExpoFonts from './components/hocs/LoadExpoFonts';
import { fetchCardSchemas } from './store/actions/requestActions';
import { initDatabase } from './store/actions/databaseActions';

export default () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    Promise.all([
      store.dispatch(fetchCardSchemas()),
      store.dispatch(initDatabase()),
    ]).then(() => setIsLoaded(true));
  }, []);

  if (!isLoaded) {
    return <AppLoading />;
  }

  return (
    <LoadExpoFonts>
      <Provider store={store}>
        <Navigator />
      </Provider>
    </LoadExpoFonts>
  );
};
