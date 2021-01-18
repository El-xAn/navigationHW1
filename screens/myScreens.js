import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import {styles} from '../styles/screensStyles'


export const ToolsScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
      }}>
      <Text style={{fontSize: 30, color: 'white'}}>For calculator App</Text>
      <Button title="press" onPress={() => navigation.navigate('Calculator')} />
    </View>
  );
};

export const EntertainmentsScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
      }}>
      <Text style={{fontSize: 30, color: 'white'}}>For Film catalog</Text>
      <Button title="press" onPress={() => navigation.navigate('Filmen')} />
    </View>
  );
};

export const AboutScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}} >
      <Text style={{fontSize: 30, color: "black"}} >Here you can find SMTH ...</Text>
    </View>
  );
}