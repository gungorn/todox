import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { user, theme, keyboard } from './reducers';


const combinedReducers = combineReducers({
    user,
    theme,
    keyboard
});

const store = createStore(combinedReducers, applyMiddleware(thunk));

export default store;
export * from './actions';
export const getState = s => store.getState()[s];