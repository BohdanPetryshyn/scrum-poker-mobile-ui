import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import HomeNavigator from './HomeNavigator';

const Navigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);

export default Navigator;
