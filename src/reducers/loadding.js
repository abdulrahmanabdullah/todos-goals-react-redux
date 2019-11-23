import { DATA_RECEIVE } from '../actions/shared';

export default function loading(state = true, action) {
  switch (action.type) {
    case DATA_RECEIVE:
      return false;
    default:
      return state;
  }
}
