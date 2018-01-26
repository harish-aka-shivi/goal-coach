import {SET_GOALS} from '../Constants';

export default (state = [], action) => {
  switch (action.type) {
    case SET_GOALS:
      const {goals} = action;
      return goals;
    default:
      return state;
  }
}
