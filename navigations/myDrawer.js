import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeScreen} from '../screens/myScreens';
import {ToolsStack} from './toolsStack';
import {site} from '../screens/myScreens';
import {EntertainmentsStack} from '../navigations/entertainmentStack';
import {BottomTab} from './aboutBottomTab';
const DrawerScreen = createDrawerNavigator();

export default Drawer = () => {
  return (
    <DrawerScreen.Navigator>
      <DrawerScreen.Screen name="Home" component={HomeScreen} />
      <DrawerScreen.Screen name="News" component={site} />
      <DrawerScreen.Screen name="Tools" component={ToolsStack} />
      <DrawerScreen.Screen name="Entertainment" component={EntertainmentsStack} />
      <DrawerScreen.Screen name="About" component={BottomTab} /> 

    </DrawerScreen.Navigator>
  );
}