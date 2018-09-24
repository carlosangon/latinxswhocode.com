import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import devsReducer from '../reducers/devs';
import filtersReducer from '../reducers/filters';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
    combineReducers({
      devs: devsReducer,
      filters: filtersReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}