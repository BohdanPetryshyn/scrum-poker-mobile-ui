import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import CreateSessionScreen from '../screens/CreateSessionScreen';
import JoinSessionScreen from '../screens/JoinSessionScreen';

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="CreateSession" component={CreateSessionScreen} />
    <Stack.Screen name="JoinSession" component={JoinSessionScreen} />
  </Stack.Navigator>
);

export default HomeNavigator;
