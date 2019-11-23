import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions/todos';
import { DATA_RECEIVE } from '../actions/shared';

export default function todos(state = [], actions) {
  switch (actions.type) {
    case ADD_TODO:
      return state.concat([actions.todo]);
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== actions.id);
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id !== actions.id
          ? todo
          : Object.assign({}, todo, { complete: !todo.complete })
      );

    case DATA_RECEIVE:
      return actions.todos;
    default:
      return state;
  }
}
