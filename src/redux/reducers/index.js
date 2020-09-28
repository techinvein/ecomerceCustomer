import { combineReducers } from 'redux';
import AppReducer from './appReducer';
import UserReducer from './users';

const rootReducer = combineReducers({
  user: UserReducer,
  app: AppReducer
});

export default rootReducer;