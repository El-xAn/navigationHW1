import React, {Component} from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/homeScreen'
import FavouritesScreen from '../screens/favouritesScreen'

const Tab = createBottomTabNavigator();

export const BottomTabMenu = () => {
    return (
        <Tab.Navigator 
            tabBarOptions={{
                activeTintColor: "black",
                inactiveTintColor: "black",
                activeBackgroundColor: '#00FFFF',
                inactiveBackgroundColor: '#5F9EA0',
                labelStyle: {
                    fontSize: 25,
                    fontWeight: 'bold'
                },
                tabStyle: {
                    paddingBottom: 10
                }
        }}>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Favourites' component={FavouritesScreen} />
        </Tab.Navigator> 
    )
}


