import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import VoteScreen from '../screens/VoteScreen';
import ResultsScreen from '../screens/ResultsScreen';
import getTabBarIcon from '../helpers/getTabBarIcon';

const PodiumIcon = getTabBarIcon('ios-podium');
const ListIcon = getTabBarIcon('ios-list');

const Tab = createBottomTabNavigator();

const SessionNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Vote"
      component={VoteScreen}
      options={{
        tabBarIcon: PodiumIcon,
      }}
    />
    <Tab.Screen
      name="Results"
      component={ResultsScreen}
      options={{
        tabBarIcon: ListIcon,
      }}
    />
  </Tab.Navigator>
);

export default SessionNavigator;
