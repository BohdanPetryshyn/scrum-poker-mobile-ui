import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import VoteScreen from '../screens/VoteScreen';
import ResultsScreen from '../screens/ResultsScreen';

const Tab = createBottomTabNavigator();

const SessionNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Vote"
      component={VoteScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-podium" size={size + 10} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Results"
      component={ResultsScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-list" size={size + 10} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default SessionNavigator;
