import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { AppLoading } from 'expo';
import { Root } from 'native-base';

import Navigator from './navigations';
import store from './store';
import LoadExpoFonts from './components/hocs/LoadExpoFonts';
import { fetchCardSchemas } from './store/actions/request';
import { getAllVotings, initDatabase } from './store/actions/database';
import { registerForPushNotifications } from './store/actions/notifications';
import registerPastSessionsFetchTask from './tasks/fetch/pastSessions';
import SentryErrorBoundary from './components/hocs/SentryErrorBoundary';

export default () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    Promise.all([
      store.dispatch(fetchCardSchemas()),
      store.dispatch(registerForPushNotifications()),
      store
        .dispatch(initDatabase())
        .then(() => store.dispatch(getAllVotings())),
      registerPastSessionsFetchTask(),
    ]).then(() => setIsLoaded(true));
  }, []);

  if (!isLoaded) {
    return <AppLoading />;
  }

  return (
    <LoadExpoFonts>
      <Provider store={store}>
        <SentryErrorBoundary>
          <Root>
            <Navigator />
          </Root>
        </SentryErrorBoundary>
      </Provider>
    </LoadExpoFonts>
  );
};
