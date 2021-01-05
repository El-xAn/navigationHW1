import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';
import {Provider} from 'react-redux';
import {infoStore, mypersistor} from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';

const EntryPoint = () => (
    <Provider store = {infoStore}>
        <PersistGate loading={null} persistor={mypersistor}>
            <App />
        </PersistGate>
    </Provider>
);
AppRegistry.registerComponent(appName, () => EntryPoint);
