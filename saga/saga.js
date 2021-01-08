import {addReducer} from '../redux/action'
import {put, takeEvery, call} from 'redux-saga/effects'

export function* mainScreenWatcher() {
    yield takeEvery("SEARCH", mainScreenWorker);
}

export function* mainScreenWorker(action) {
    const data = yield call(fetchData(action));
    yield put(addReducer(data));
}

function fetchData(dispatched) {
    console.log(dispatched)
    return async () => {
        try {
          const url = `http://api.tvmaze.com/search/shows?q=${dispatched.payload}`;
          const response = await fetch(url);
          return await response.json();
         
        } catch (e) {
          console.log("Wrong url!");
        }
      }
}