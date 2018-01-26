import {SIGNED_IN,SET_GOALS} from '../Constants';

export function logUser(email) {
  console.log("in actions index.js loguser function, email is ", email);
  const action = {
    type: SIGNED_IN,
    email: email
  }
  return action;
}

export function setGoals(goals) {
  console.log("in actions index.js setGoals function, goals are ", goals);
  const action = {
    type: SET_GOALS,
    goals
  }
  return action;
}
