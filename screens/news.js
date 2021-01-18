import React, {Component} from 'react';
import {WebView} from 'react-native-webview';
import NetInfo from '@react-native-community/netinfo';
import FirstSplash from './loadScreen';

export default class NewsScreen extends Component {
    constructor(props) {
        super(props);
    }
    
    netInfo = () => { NetInfo.addEventListener(state => {
            if(!state.isConnected) {
                alert('No internet connection !');        
            }
        })
    }

    loading = () => {
        <FirstSplash />
    }
    
    componentDidMount() {
        this.loading(),
        this.netInfo()
    }

    componentWillUnmount() {
        this.netInfo()
    }

    render () {
        return (
            <WebView source={{uri: 'https://qafqazinfo.az'}} style={{marginTop: 20}} />
        ); 
    }
  };