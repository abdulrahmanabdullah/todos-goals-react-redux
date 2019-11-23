import { ADD_TODO } from '../actions/todos';
import { ADD_GOAL } from '../actions/goals';
const checker = store => next => action => {
  // Check todo not contain bitcoin words also goals
  if (
    action.type === ADD_TODO &&
    action.todo.name.toLowerCase().indexOf('bitcoin') !== -1
  ) {
    return alert('that is bad idea');
  }

  if (
    action.type === ADD_GOAL &&
    action.goal.name.toLowerCase().indexOf('bitcoin') !== -1
  ) {
    return alert('Nope that is bad idea');
  }
  return next(action);
};

export default checker;
