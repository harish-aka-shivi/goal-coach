import {SIGNED_IN} from '../Constants';

export function logUser(email) {
  console.log("in actions index.js loguser function, email is ", email);
  const action = {
    type: SIGNED_IN,
    email: email
  }
  return action;
}
