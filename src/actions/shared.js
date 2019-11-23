import API from 'goals-todos-api';
export const DATA_RECEIVE = 'DATA_RECEIVER';

function receiveDataAction(todos, goals) {
  return {
    type: DATA_RECEIVE,
    todos,
    goals
  };
}

export function handleReceiveData() {
  return dispatch => {
    Promise.all([API.fetchTodos(), API.fetchGoals()]).then(([todos, goals]) => {
      dispatch(receiveDataAction(todos, goals));
    });
  };
}
