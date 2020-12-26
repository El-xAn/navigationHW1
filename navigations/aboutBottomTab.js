import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
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
import {MaterialCommunityIcons} from 'react-native-vector'


const Tab = createBottomTabNavigator(); 

export const BottomTab = () => {
    return (
        <Tab.Navigator initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#e91e63',
        }}>
            <Tab.Screen 
                name="Profile" 
                component={ProfileScreen} 
                // options={{
                //     tabBarLabel: 'Profile',
                //     tabBarIcon: ({ color, size }) => (
                //         <MaterialCommunityIcons name="account" color={blue} size={20} />
                //     ),
                // }}
            />
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