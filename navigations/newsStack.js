import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NewsScreen, site} from '../screens/myScreens';


const Stack = createStackNavigator();

export const NewsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="News" component={NewsScreen} />
            <Stack.Screen name="QafqazInfo" component={site} />
        </Stack.Navigator>
    );
}



