import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {EntertainmentsScreen} from '../screens/myScreens';
import Filmen from '../screens/Filmen';

const Stack = createStackNavigator();

export const EntertainmentsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Entertainment" component={EntertainmentsScreen} />
      <Stack.Screen name="Filmen" component={Filmen} />
    </Stack.Navigator>
  );
}