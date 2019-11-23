import API from 'goals-todos-api';
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo
  };
}

export function handleAdd(name, callback) {
  return dispatch => {
    return API.saveGoal(name)
      .then(todo => {
        callback();
        dispatch(addTodo(todo));
      })
      .catch(() => {
        alert('Some error ocurred when add new todo try again ');
      });
  };
}

function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id
  };
}

// This function it's responsible to seprate delete item from db and UI, Here we return func
// So we create new middleware to know the type of dispatch if func invoking otherwise complete normally .
export function handleDelete(todo) {
  return dispatch => {
    dispatch(removeTodo(todo.id));
    return API.deleteTodo(todo.id).catch(() => {
      dispatch(addTodo(todo));
      alert('Some error ocurred, Please try again');
    });
  };
}

function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id
  };
}
export function handleToggle(todo) {
  return dispatch => {
    dispatch(toggleTodo(todo.id));
    return API.saveTodoToggle(todo).catch(() => {
      dispatch(toggleTodo(todo.id));
      alert('Some error ocurred pls try again later ');
    });
  };
}
