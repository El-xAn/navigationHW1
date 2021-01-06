import {reducerForFav} from './reducerForFav';
import {reducerForSearch} from './reducerForSearch';
import {combineReducers} from 'redux';

const reducer = combineReducers({reducerForFav, reducerForSearch});
export default reducer;