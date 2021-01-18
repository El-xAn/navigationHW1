import React, {Component} from 'react';
import {View, ImageBackground, AppState} from 'react-native';
import {styles} from '../styles/screensStyles'
import SplashScreen from './splashScreen';

export default class HomeScreen extends Component {
    constructor (props) {
        super(props)
        this.state = {
            splash: false,
            appState: AppState.currentState
        }
    }

    loadAnimation = () => this.setState({splash: true})

    componentDidMount() {
      setTimeout(this.loadAnimation, 1000)
      AppState.addEventListener('change', this.myhandlerAppStateChange)
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this.myhandlerAppStateChange)
    }

    myhandlerAppStateChange = (nextAppState) => {
        if (
            this.state.appState.match(/inactive|background/) &&
            nextAppState === 'active'
        ) {
            alert('Welcome Back'); 
        } 
        this.setState({appState: nextAppState});
    };

    render(){
        if(!this.state.splash) {
            return (
                <View style={styles.container}>
                    <ImageBackground source={require('../components/main.jpg')} style={styles.image} />
                </View>
            ); 
        } else {
            return( <SplashScreen /> );
        }
        
        
    } 
}
  