import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import rootReducer from '../reducers/root.reducer';
import logger from 'redux-logger';
import {composeWithDevTools} from 'remote-redux-devtools';

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk, logger)),
);
