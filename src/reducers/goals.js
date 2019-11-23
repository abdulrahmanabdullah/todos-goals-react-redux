import { ADD_GOAL, REMOVE_GOAL } from '../actions/goals';
import { DATA_RECEIVE } from '../actions/shared';

export default function goals(state = [], action) {
  switch (action.type) {
    case ADD_GOAL:
      return state.concat([action.goal]);
    case REMOVE_GOAL:
      return state.filter(goal => goal.id !== action.id);
    case DATA_RECEIVE:
      return action.goals;
    default:
      return state;
  }
}
