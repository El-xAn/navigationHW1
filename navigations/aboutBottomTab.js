import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
    View,
    ImageBackground,
    Text,
    StyleSheet,
    Button,
    Image,
    TouchableOpacity,
  } from 'react-native';


const Tab = createBottomTabNavigator(); 

export const BottomTab = () => {
    return (
        <Tab.Navigator initialRouteName="Feed"
          tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: 'black',
          activeBackgroundColor: '#e91e63',
          labelStyle: {
            fontSize: 25,
            fontWeight: 'bold',
            marginBottom: 5
          }
          }}>

            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
            
        </Tab.Navigator>
    );
}

export const ProfileScreen = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }}>
        <Text style={styles.tabsText} >Profile!</Text>
      </View>
    );
  }
  
export const SettingsScreen = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}>
        <Text style={styles.tabsText} >Settings!</Text>
      </View>
    );
  }

  const styles = StyleSheet.create ({
      tabsText: {
        fontSize: 30,
        color: 'white'
      },
  });