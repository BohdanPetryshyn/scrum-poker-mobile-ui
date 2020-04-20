import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../components/screens/HomeScreen';
import CreateSessionScreen from '../components/CreateSessionScreen';
import JoinSessionScreen from '../components/JoinSessionScreen';

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="CreateSession" component={CreateSessionScreen} />
    <Stack.Screen name="JoinSession" component={JoinSessionScreen} />
  </Stack.Navigator>
);

export default HomeNavigator;
