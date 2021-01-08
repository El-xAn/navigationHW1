import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers/index';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import logger from "redux-logger";
import createSagaMiddleware from 'redux-saga';
import {mainScreenWatcher} from '../saga/saga';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['reducerForSearch'],
    whitelist: ['reducerForFav']
}

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, reducer)
export const infoStore = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
export const mypersistor = persistStore(infoStore);

sagaMiddleware.run(mainScreenWatcher);