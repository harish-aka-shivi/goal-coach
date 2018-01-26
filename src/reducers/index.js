import  {combineReducers} from 'redux';
import user from './reducerUser';
import goals from './reducerGoals';

export default combineReducers({
  user,
  goals
})
