import { combineReducers } from 'redux';

import todos from './todos';
import goals from './goals';
import loading from './loadding';

export default combineReducers({
  todos,
  goals,
  loading
});
