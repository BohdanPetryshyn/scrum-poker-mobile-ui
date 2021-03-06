import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../components/HomeScreen';
import CreateSessionScreen from '../components/CreateSessionScreen';
import JoinSessionScreen from '../components/JoinSessionScreen';
import PastSessionsResultsScreen from '../components/PastSessionsResultsScreen';
import SessionNavigator from './SessionNavigator';
import ShareSessionButton from '../components/ShareSessionButton';

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="CreateSession" component={CreateSessionScreen} />
    <Stack.Screen name="JoinSession" component={JoinSessionScreen} />
    <Stack.Screen name="PastSessions" component={PastSessionsResultsScreen} />
    <Stack.Screen
      name="Session"
      component={SessionNavigator}
      options={{ headerRight: () => <ShareSessionButton /> }}
    />
  </Stack.Navigator>
);

export default HomeNavigator;
