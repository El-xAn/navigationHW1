import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import {WebView} from 'react-native-webview';

const image = {uri: 'https://reactjs.org/logo-og.png'};

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.text}>Inside</Text>
      </ImageBackground>
    </View>
  );
};

export const NewsScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={{flexDirection: 'column', margin: 10}}>
        <Image
          style={{width: 100, height: 50, resizeMode: 'stretch'}}
          source={require('../components/qafqaz.png')}
        />
        {/* <TouchableOpacity onPress={() => navigation.navigate('site')} style={{backgroundColor: 'blue', margin: 5 }}><Text style={{fontSize: 25, color: 'white' }}>Qafqaz Info</Text></TouchableOpacity> */}
        <Button title="press" onPress={() => navigation.navigate('site')} />
      </View>
    </View>
  );
};

export const site = () => {
  return (
    <WebView source={{uri: 'https://qafqazinfo.az'}} style={{marginTop: 20}} />
  );
};

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
});
