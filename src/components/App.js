import React from 'react';
import ConnectTodos from './Todos';
import ConnectGoals from './Goals';
import { handleReceiveData } from '../actions/shared';
import { connect } from 'react-redux';

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(handleReceiveData());
  }
  render() {
    const { loading } = this.props;
    if (loading === true) {
      return <h3>Loading 💁‍♀️ </h3>;
    }
    return (
      <div>
        <ConnectTodos />
        <ConnectGoals />
      </div>
    );
  }
}
export default connect(state => ({
  loading: state.loading
}))(App);
