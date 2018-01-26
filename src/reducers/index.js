import {SIGNED_IN} from '../Constants';

let user = {
  email:null
}

export default (state = user, action) => {
  console.log("in reducers index.js state is ", state);
  console.log("in reducers index.js action is ", action);
  switch (action.type) {
    case SIGNED_IN:
      const {email} = action;
      user =  {
        email
      }
      console.log('n reducers index.js returned is', user);
      return user;
    default:
      return user;
  }
}
