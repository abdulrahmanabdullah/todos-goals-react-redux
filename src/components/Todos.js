import React from 'react';
import List from './List';
import { connect } from 'react-redux';
import { handleAdd, handleDelete, handleToggle } from '../actions/todos';

class Todos extends React.Component {
  addTodo = e => {
    e.preventDefault();
    this.props.dispatch(
      handleAdd(this.input.value, () => (this.input.value = ''))
    );
  };

  removeItem = todo => {
    this.props.dispatch(handleDelete(todo));
  };
  toggleItem = todo => {
    this.props.dispatch(handleToggle(todo));
  };
  render() {
    return (
      <div>
        <h1>Todos List</h1>
        <input
          type='text'
          placeholder='Add Todo'
          ref={input => (this.input = input)}
        />
        <button onClick={this.addTodo}>Add</button>
        <List
          items={this.props.todos}
          removeItem={this.removeItem}
          toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

export default connect(state => ({
  todos: state.todos
}))(Todos);
