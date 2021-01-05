import {reducerForFav} from './reducerForFav';
import {reducerForSearch} from './reducerForSearch';
import {combineReducers} from 'redux';

export default combineReducers({reducerForFav, reducerForSearch})