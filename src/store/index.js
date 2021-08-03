import { combineReducers, createStore } from 'redux';
import GameReducer from './reducer/GameReducer';

const rootReducer = combineReducers({
    GameReducer
}); 

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
