import {combineReducers} from 'redux';
import timeout from './timeout';
import progress from './progress';
import complexity from './complexity';
import gameStatus from './gamestatus';

const reducers = {
  timeout: timeout,
  progress: progress,
  complexity: complexity,
  gameStatus: gameStatus,
};

export default combineReducers(reducers);
