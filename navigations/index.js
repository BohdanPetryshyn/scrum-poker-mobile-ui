import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import HomeNavigator from './HomeNavigator';
import { navigationRef } from './externalNavigators';

const Navigator = () => (
  <NavigationContainer ref={navigationRef}>
    <HomeNavigator />
  </NavigationContainer>
);

export default Navigator;

export * from './externalNavigators';
