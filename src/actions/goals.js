import API from 'goals-todos-api';
export const ADD_GOAL = 'ADD_GOAL';
export const REMOVE_GOAL = 'REMOVE_GOAL';

function addGoal(goal) {
  return {
    type: ADD_GOAL,
    goal
  };
}

export function handleAddGoal(name, clear) {
  return dispatch => {
    return API.saveGoal(name)
      .then(goal => {
        // this.input.value = '';
        clear();
        dispatch(addGoal(goal));
      })
      .catch(() => {
        alert('Some error ocurred try again');
      });
  };
}
function removeGoal(id) {
  return {
    type: REMOVE_GOAL,
    id
  };
}

export function handleDeleteGoal(goal) {
  return dispatch => {
    dispatch(removeGoal(goal.id));
    return API.deleteGoal(goal.id).catch(() => {
      dispatch(addGoal(goal));
      alert(' Some error ocurred when remove goal, try again .');
    });
  };
}
