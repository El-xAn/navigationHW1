import {reducerForFav} from './reducerForFav';
import {reducerForSearch} from './reducerForSearch';
import {reducerForLoading} from './reducerForLoading'
import {combineReducers} from 'redux';

const reducer = combineReducers({reducerForFav, reducerForSearch, reducerForLoading});
export default reducer;