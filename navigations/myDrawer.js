import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/drawerHomeScreen';
import {ToolsStack} from './toolsStack';
import NewsScreen from '../screens/news';
import {BottomTabMenu} from './entertainment';
import {BottomTab} from './aboutBottomTab';
const DrawerScreen = createDrawerNavigator();

export default Drawer = () => {
  return (
    <DrawerScreen.Navigator>
      <DrawerScreen.Screen name="Home" component={HomeScreen} />
      <DrawerScreen.Screen name="News" component={NewsScreen} />
      <DrawerScreen.Screen name="Tools" component={ToolsStack} />
      <DrawerScreen.Screen name="Entertainment" component={BottomTabMenu} />
      <DrawerScreen.Screen name="About" component={BottomTab} /> 

    </DrawerScreen.Navigator>
  );
}