import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import VotingScreen from '../components/VotingScreen';
import ResultsScreen from '../components/ResultsScreen';
import getTabBarIcon from '../components/hocs/getTabBarIcon';

const PodiumIcon = getTabBarIcon('ios-podium');
const ListIcon = getTabBarIcon('ios-list');

const Tab = createBottomTabNavigator();

const SessionNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Vote"
      component={VotingScreen}
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
