import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers/index';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import logger from "redux-logger";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['reducerForSearch'],
    whitelist: ['reducerForFav']
  }
  
  const persistedReducer = persistReducer(persistConfig, reducer)
  export const infoStore = createStore(persistedReducer, applyMiddleware(logger, thunk));
  export const mypersistor = persistStore(infoStore);

