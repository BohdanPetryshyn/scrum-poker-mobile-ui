import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import VoteScreen from '../screens/VoteScreen';
import ResultsScreen from '../screens/ResultsScreen';

const Tab = createBottomTabNavigator();

const SessionNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Vote" component={VoteScreen} />
    <Tab.Screen name="Results" component={ResultsScreen} />
  </Tab.Navigator>
);

export default SessionNavigator;
