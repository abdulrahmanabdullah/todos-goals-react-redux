import React from 'react';
import List from './List';
import { connect } from 'react-redux';
import { handleAddGoal, handleDeleteGoal } from '../actions/goals';

class Goals extends React.Component {
  removeGoal = goal => {
    const { dispatch } = this.props;
    dispatch(handleDeleteGoal(goal));
  };
  addGoals = e => {
    e.preventDefault();
    const name = this.input.value;
    this.props.dispatch(
      handleAddGoal(name, () => {
        this.input.value = '';
      })
    );
  };

  render() {
    return (
      <div>
        <input
          type='text'
          placeholder='Add Goal'
          ref={input => (this.input = input)}
        />
        <button onClick={this.addGoals}>Add Goal</button>
        <List items={this.props.goals} removeItem={this.removeGoal} />
      </div>
    );
  }
}

export default connect(state => ({
  goals: state.goals
}))(Goals);
