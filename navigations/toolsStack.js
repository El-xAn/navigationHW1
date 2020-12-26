import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ToolsScreen} from '../screens/myScreens';
import Calculator from '../screens/Calculator';

const Stack = createStackNavigator();

export const ToolsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tools" component={ToolsScreen} />
      <Stack.Screen name="Calculator" component={Calculator} />
    </Stack.Navigator>
  );
}