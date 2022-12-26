import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/Root';
import { LocationScreen } from '../screens/Location/LocationScreen';
const Stack = createNativeStackNavigator<RootStackParamList>();

export const LocationStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Location" component={LocationScreen} />
  </Stack.Navigator>
);
