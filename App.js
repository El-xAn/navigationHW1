import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Drawer from './navigations/myDrawer'

export default class App extends Component {
  render() {
    return (
    <NavigationContainer> 
      <Drawer />
    </NavigationContainer>
    );
  }
}
