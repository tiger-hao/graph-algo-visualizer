import { combineReducers } from 'redux';
import graph from './graph';
import algorithm from './algorithm';

const rootReducer = combineReducers({
  graph,
  algorithm,
});

export default rootReducer;
