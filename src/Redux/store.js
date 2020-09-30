import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers/index';

const initialState = {};
const middlewares = applyMiddleware(thunk);

export const store = createStore(rootReducer, initialState, composeWithDevTools(middlewares));