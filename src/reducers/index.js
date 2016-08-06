
import { combineReducers } from 'redux';
import feedReducer from '../reducers/feedReducers.js';
import userReducer from '../reducers/userReducers.js';

export default combineReducers({
  feedState: feedReducer,
  userState: userReducer
});
